"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gatsbyFunction = void 0;
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const process_1 = __importDefault(require("process"));
const reach_router_1 = require("@gatsbyjs/reach-router");
const co_body_1 = __importDefault(require("co-body"));
const multer_1 = __importDefault(require("multer"));
const utils_1 = require("./utils");
/**
 * Depending on the version of '@gatsbyjs/reach-router' installed, the 'match' method may not be defined.
 * This check ensures that this continues to work as expected between v1 and v2 of the package.
 */
const reachMatch = reach_router_1.match || reach_router_1.matchPath;
const parseForm = (0, multer_1.default)().any();
/**
 * Execute a Gatsby function
 */
async function gatsbyFunction(req, res, event, appDir) {
    const functionsDir = path_1.default.join(appDir, '.cache', 'functions');
    // Multipart form data middleware. because co-body can't handle it
    await new Promise((resolve) => {
        // As we're using a fake Express handler we need to ignore the type to keep multer happy
        parseForm(req, res, resolve);
    });
    try {
        // If req.body is populated then it was multipart data
        if (!req.files &&
            !req.body &&
            req.method !== 'GET' &&
            req.method !== 'HEAD') {
            req.body = await (0, co_body_1.default)(req);
        }
    }
    catch (error) {
        console.log('Error parsing body', error, req);
    }
    const pathFragment = decodeURIComponent(req.url).replace('/api/', '');
    let functions;
    try {
        functions = require(path_1.default.join(functionsDir, 'manifest.json'));
    }
    catch {
        return {
            statusCode: 404,
            body: 'Could not load function manifest',
        };
    }
    // Begin copied from Gatsby serve command
    // Check first for exact matches.
    let functionObj = functions.find(({ functionRoute }) => functionRoute === pathFragment);
    if (!functionObj) {
        // Check if there's any matchPaths that match.
        // We loop until we find the first match.
        functions.some((func) => {
            if (func.matchPath) {
                const matchResult = reachMatch(func.matchPath, pathFragment);
                if (matchResult) {
                    req.params = matchResult.params;
                    if (req.params[`*`]) {
                        // Backwards compatability for v3
                        // TODO remove in v5
                        req.params[`0`] = req.params[`*`];
                    }
                    functionObj = func;
                    return true;
                }
            }
            return false;
        });
    }
    // end copied from Gatsby serve command
    if (functionObj) {
        console.log(`Running ${functionObj.functionRoute}`);
        const start = Date.now();
        // During develop, the absolute path is correct, otherwise we need to use a relative path, as we're in a lambda
        const pathToFunction = process_1.default.env.NETLIFY_DEV
            ? functionObj.absoluteCompiledFilePath
            : path_1.default.join(functionsDir, functionObj.relativeCompiledFilePath);
        if (process_1.default.env.NETLIFY_DEV && !(0, fs_1.existsSync)(pathToFunction)) {
            // Functions are sometimes lazily-compiled, so we check and proxy the request if needed
            console.log('No compiled function found. Proxying to gatsby develop server');
            return (0, utils_1.proxyRequest)(event, res);
        }
        try {
            if (process_1.default.env.NETLIFY_LOCAL) {
                // Make sure it's hot and fresh from the filesystem
                delete require.cache[require.resolve(pathToFunction)];
            }
            const fn = require(pathToFunction);
            const fnToExecute = (fn && fn.default) || fn;
            await Promise.resolve(fnToExecute(req, res));
        }
        catch (error) {
            console.error(error);
            // Don't send the error if that would cause another error.
            if (!res.headersSent) {
                res
                    .status(500)
                    .send(`Error when executing function "${functionObj.originalRelativeFilePath}": "${error.message}"`);
            }
        }
        const end = Date.now();
        console.log(`Executed function "/api/${functionObj.functionRoute}" in ${end - start}ms`);
    }
    else {
        res.status(404).send('Not found');
    }
}
exports.gatsbyFunction = gatsbyFunction;
