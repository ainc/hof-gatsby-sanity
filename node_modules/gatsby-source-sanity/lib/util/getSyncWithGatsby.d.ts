import { Node, SourceNodesArgs } from 'gatsby';
import { SanityInputNode } from '../types/gatsby';
import { SanityDocument } from '../types/sanity';
import { ProcessingOptions } from './normalize';
import { TypeMap } from './remoteGraphQLSchema';
export type SyncWithGatsby = (id: string, document?: SanityDocument) => void;
/**
 * @returns function to sync a single document from the local cache of known documents with Gatsby
 */
export default function getSyncWithGatsby(props: {
    documents: Map<string, SanityDocument>;
    gatsbyNodes: Map<string, SanityInputNode | Node>;
    typeMap: TypeMap;
    processingOptions: ProcessingOptions;
    args: SourceNodesArgs;
}): SyncWithGatsby;
