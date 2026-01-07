/* define format for api key errors */

import { AppError } from "./error.ts";

export default class ApiKeyError extends AppError {
    
    private static readonly _statusCode = 403;
    private readonly        _code: number;
    private readonly        _logging: boolean;
    private readonly        _context: { [key: string]: any };
    private readonly        _showStack: boolean;

    constructor(params?: {
        code?: number, message?: string, logging?: boolean,
        showStack?: boolean, context?: { [key: string]: any }
    }) {
        const { code, message, logging, showStack } = params || {};

        // use default params if not provided
        super(          message             || "steam api key is not configured");
        this._code      = code              || ApiKeyError._statusCode;
        this._logging   = logging           || true;
        this._context   = params?.context   || {};
        this._showStack = showStack         || false;
        
        // set prototype explicitly
        Object.setPrototypeOf(this, ApiKeyError.prototype);
    }

    get err() {
        return [{
            message: this.message,
            context: this._context
        }];
    }

    get statusCode() {
        return this._code;
    }

    get logging() {
        return this._logging;
    }

    get showStack() {
        return this._showStack;
    }


}

