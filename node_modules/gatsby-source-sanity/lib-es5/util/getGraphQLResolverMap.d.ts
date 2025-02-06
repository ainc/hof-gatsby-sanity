import { CreateResolversArgs } from 'gatsby';
import { GatsbyResolverMap } from '../types/gatsby';
import { TypeMap } from './remoteGraphQLSchema';
import { PluginConfig } from './validateConfig';
export declare function getGraphQLResolverMap(typeMap: TypeMap, pluginConfig: PluginConfig, context: CreateResolversArgs): GatsbyResolverMap;
