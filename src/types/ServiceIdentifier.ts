import {Token} from "../Token";
import { AbstractObjectType } from "./ObjectType";

/**
 * Unique service identifier.
 * Can be some class type, or string id, or instance of Token.
 */
export type ServiceIdentifier<T = any> = Function|Token<T>|string|{ service: T }|AbstractObjectType<T>;