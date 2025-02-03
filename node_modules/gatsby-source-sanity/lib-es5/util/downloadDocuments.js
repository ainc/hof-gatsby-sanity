"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getAllDocuments_1 = require("./getAllDocuments");
function downloadDocuments(url, token, options) {
    if (options === void 0) { options = {}; }
    return (0, getAllDocuments_1.getAllDocuments)(url, token, options).then(function (stream) {
        return new Promise(function (resolve, reject) {
            var documents = new Map();
            stream.on('data', function (doc) {
                documents.set(doc._id, doc);
            });
            stream.on('end', function () {
                resolve(documents);
            });
            stream.on('error', function (error) {
                reject(error);
            });
        });
    });
}
exports.default = downloadDocuments;
//# sourceMappingURL=downloadDocuments.js.map