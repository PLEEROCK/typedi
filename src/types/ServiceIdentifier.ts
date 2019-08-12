import {Token} from "../Token";
import {ServiceDefinition} from "./ServiceDefinition";

/**
 * Unique service identifier.
 * Can be some class type, or string id, or instance of Token.
 */
export type ServiceIdentifier<T = any> = Function|Token<T>|string|ServiceDefinition<T>;