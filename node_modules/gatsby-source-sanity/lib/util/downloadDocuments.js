"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getAllDocuments_1 = require("./getAllDocuments");
function downloadDocuments(url, token, options = {}) {
    return (0, getAllDocuments_1.getAllDocuments)(url, token, options).then((stream) => new Promise((resolve, reject) => {
        const documents = new Map();
        stream.on('data', (doc) => {
            documents.set(doc._id, doc);
        });
        stream.on('end', () => {
            resolve(documents);
        });
        stream.on('error', (error) => {
            reject(error);
        });
    }));
}
exports.default = downloadDocuments;
//# sourceMappingURL=downloadDocuments.js.map