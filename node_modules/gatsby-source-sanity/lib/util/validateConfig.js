"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const documentIds_1 = require("./documentIds");
const errors_1 = require("./errors");
function validateConfig(config, reporter) {
    if (!config.projectId) {
        reporter.panic({
            id: (0, documentIds_1.prefixId)(errors_1.ERROR_CODES.MissingProjectId),
            context: { sourceMessage: '[sanity] `projectId` must be specified' },
        });
    }
    if (!config.dataset) {
        reporter.panic({
            id: (0, documentIds_1.prefixId)(errors_1.ERROR_CODES.MissingDataset),
            context: { sourceMessage: '[sanity] `dataset` must be specified' },
        });
    }
    if (config.overlayDrafts && !config.token) {
        reporter.warn('[sanity] `overlayDrafts` is set to `true`, but no token is given');
    }
    const inDevelopMode = process.env.gatsby_executing_command === 'develop';
    if (config.watchMode && !inDevelopMode) {
        reporter.warn('[sanity] Using `watchMode` when not in develop mode might prevent your build from completing');
    }
    return true;
}
exports.default = validateConfig;
//# sourceMappingURL=validateConfig.js.map