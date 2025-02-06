import { GatsbyNode } from 'gatsby';
export declare const onPreInit: GatsbyNode['onPreInit'];
export declare const onPreBootstrap: GatsbyNode['onPreBootstrap'];
export declare const createResolvers: GatsbyNode['createResolvers'];
export declare const createSchemaCustomization: GatsbyNode['createSchemaCustomization'];
export declare const sourceNodes: GatsbyNode['sourceNodes'];
export declare const setFieldsOnGraphQLNodeType: GatsbyNode['setFieldsOnGraphQLNodeType'];
export declare const onCreateDevServer: ({ app }: {
    app: any;
}) => Promise<void>;
