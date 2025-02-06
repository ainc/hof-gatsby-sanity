"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateWebhookPayload = exports.handleWebhookEvent = void 0;
var debug_1 = __importDefault(require("../debug"));
var documentIds_1 = require("./documentIds");
/**
 * Gets a document id received from the webhook & delete it in the store.
 */
function handleDeleteWebhook(args, options) {
    var webhookBody = args.webhookBody, reporter = args.reporter;
    var rawId = webhookBody.documentId, dataset = webhookBody.dataset, projectId = webhookBody.projectId;
    var publishedDocumentId = (0, documentIds_1.unprefixId)(rawId);
    var config = options.client.config();
    if (projectId && dataset && (config.projectId !== projectId || config.dataset !== dataset)) {
        return false;
    }
    // If a draft is deleted, avoid deleting its published counterpart
    if (rawId.startsWith('drafts.') && options.processingOptions.overlayDrafts) {
        // Sub-optimal: this will skip deleting draft-only documents which should be deleted.
        return true;
    }
    handleDeletedDocuments(args, [publishedDocumentId]);
    reporter.info("Deleted 1 document");
    return true;
}
function handleWebhookEvent(args, options) {
    var webhookBody = args.webhookBody, reporter = args.reporter;
    var validated = validateWebhookPayload(webhookBody);
    if (validated === false) {
        (0, debug_1.default)('[sanity] Invalid/non-sanity webhook payload received');
        return false;
    }
    reporter.info('[sanity] Processing changed documents from webhook');
    if (validated === 'delete-operation') {
        return handleDeleteWebhook(args, options);
    }
    return false;
}
exports.handleWebhookEvent = handleWebhookEvent;
function handleDeletedDocuments(context, ids) {
    var actions = context.actions, createNodeId = context.createNodeId, getNode = context.getNode;
    var deleteNode = actions.deleteNode;
    return ids
        .map(function (documentId) { return getNode((0, documentIds_1.safeId)((0, documentIds_1.unprefixId)(documentId), createNodeId)); })
        .filter(function (node) { return typeof node !== 'undefined'; })
        .reduce(function (count, node) {
        (0, debug_1.default)('Deleted document with ID %s', node._id);
        deleteNode(node);
        return count + 1;
    }, 0);
}
function validateWebhookPayload(payload) {
    if (!payload) {
        return false;
    }
    if ('operation' in payload && payload.operation === 'delete') {
        return 'delete-operation';
    }
    return false;
}
exports.validateWebhookPayload = validateWebhookPayload;
//# sourceMappingURL=handleWebhookEvent.js.map