import { Reporter } from 'gatsby';
import { PluginConfig } from './validateConfig';
interface AstRewriterContext {
    reporter: Reporter;
    config: PluginConfig;
}
export declare const rewriteGraphQLSchema: (schemaSdl: string, context: AstRewriterContext) => string;
export {};
