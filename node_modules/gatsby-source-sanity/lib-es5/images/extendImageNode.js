"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extendImageNode = void 0;
var graphql_1 = require("gatsby/graphql");
var cache_1 = require("../util/cache");
var getGatsbyImageProps_1 = require("./getGatsbyImageProps");
var graphql_utils_1 = require("gatsby-plugin-image/graphql-utils");
var ImageFitType = new graphql_1.GraphQLEnumType({
    name: 'SanityImageFit',
    values: {
        CLIP: { value: 'clip' },
        CROP: { value: 'crop' },
        FILL: { value: 'fill' },
        FILLMAX: { value: 'fillmax' },
        MAX: { value: 'max' },
        SCALE: { value: 'scale' },
        MIN: { value: 'min' },
    },
});
var ImagePlaceholderType = new graphql_1.GraphQLEnumType({
    name: "SanityGatsbyImagePlaceholder",
    values: {
        DOMINANT_COLOR: { value: "dominantColor" },
        BLURRED: { value: "blurred" },
        NONE: { value: "none" },
    },
});
var extensions = new Map();
function extendImageNode(config) {
    var key = (0, cache_1.getCacheKey)(config, cache_1.CACHE_KEYS.IMAGE_EXTENSIONS);
    if (extensions.has(key)) {
        return extensions.get(key);
    }
    var extension = getExtension(config);
    extensions.set(key, extension);
    return extension;
}
exports.extendImageNode = extendImageNode;
function getExtension(config) {
    var location = { projectId: config.projectId, dataset: config.dataset };
    return {
        gatsbyImageData: (0, graphql_utils_1.getGatsbyImageFieldConfig)(function (image, args) { return (0, getGatsbyImageProps_1.getGatsbyImageData)(image, args, location); }, {
            placeholder: {
                type: ImagePlaceholderType,
                defaultValue: "dominantColor",
                description: "Format of generated placeholder image, displayed while the main image loads.\nBLURRED: a blurred, low resolution image, encoded as a base64 data URI (default)\nDOMINANT_COLOR: a solid color, calculated from the dominant color of the image.\nNONE: no placeholder.",
            },
            fit: {
                type: ImageFitType,
                defaultValue: 'fill',
            },
        }),
    };
}
//# sourceMappingURL=extendImageNode.js.map