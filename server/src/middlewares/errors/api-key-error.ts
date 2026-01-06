
import { AppError } from "./error.ts";

export default class ApiKeyError extends AppError {
    
    private static readonly _statusCode = 403;
    private readonly        _code: number;
    private readonly        _logging: boolean;
    private readonly        _context: { [key: string]: any };

    constructor(params?: { code?: number, message?: string, logging?: boolean, context?: { [key: string]: any } }) {
        const { code, message, logging } = params || {};

        // use default params if not provided
        super(          message             || "steam api key is not configured");
        this._code      = code              || ApiKeyError._statusCode;
        this._logging   = logging           || false;
        this._context   = params?.context   || {};

        // set prototype explicitly
        Object.setPrototypeOf(this, ApiKeyError.prototype);
    }

    get content() {
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


}

