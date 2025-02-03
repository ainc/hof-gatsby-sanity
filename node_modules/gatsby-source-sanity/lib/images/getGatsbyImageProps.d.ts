import { IGatsbyImageData, Layout } from 'gatsby-plugin-image';
export type ImageNode = ImageAsset | ImageObject | ImageRef | string | null | undefined;
export declare const EVERY_BREAKPOINT: number[];
export declare enum ImageFormat {
    NO_CHANGE = "",
    WEBP = "webp",
    JPG = "jpg",
    PNG = "png"
}
type ImagePalette = {
    darkMuted?: ImagePaletteSwatch;
    lightVibrant?: ImagePaletteSwatch;
    darkVibrant?: ImagePaletteSwatch;
    vibrant?: ImagePaletteSwatch;
    dominant?: ImagePaletteSwatch;
    lightMuted?: ImagePaletteSwatch;
    muted?: ImagePaletteSwatch;
};
type ImagePaletteSwatch = {
    background?: string;
    foreground?: string;
    population?: number;
    title?: string;
};
type ImageDimensions = {
    width: number;
    height: number;
    aspectRatio: number;
};
type ImageMetadata = {
    palette?: ImagePalette;
    dimensions: ImageDimensions;
    lqip?: string;
};
type ImageAssetStub = {
    url: string;
    assetId: string;
    extension: string;
    metadata: ImageMetadata;
};
type ImageAsset = ImageAssetStub & {
    _id: string;
};
type ImageRef = {
    _ref: string;
};
type ImageObject = {
    asset: ImageRef | ImageAsset;
};
export type ImageArgs = {
    maxWidth?: number;
    maxHeight?: number;
    sizes?: string;
    toFormat?: ImageFormat;
};
type SanityLocation = {
    projectId: string;
    dataset: string;
};
type ImageFit = 'clip' | 'crop' | 'fill' | 'fillmax' | 'max' | 'scale' | 'min';
export type GatsbyImageDataArgs = {
    width?: number;
    height?: number;
    aspectRatio?: number;
    layout?: Layout;
    sizes?: string;
    placeholder?: 'blurred' | 'dominantColor' | 'none';
    fit?: ImageFit;
};
export declare function getGatsbyImageData(image: ImageNode, { fit, ...args }: GatsbyImageDataArgs, loc: SanityLocation): IGatsbyImageData | null;
export {};
