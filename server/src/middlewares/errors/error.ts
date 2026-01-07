/* define structure for custom errors */

// error response structure (err: content[])
export type AppErrorContent = {
    message: string;
    context?: { [key: string]: any };
}

// error class structure
export abstract class AppError extends Error {
    abstract readonly statusCode:   number;
    abstract readonly logging:      boolean;
    abstract readonly err:          AppErrorContent[];
    abstract readonly showStack:    boolean;
    
    constructor(message: string) {
        // only message is required for error content (can have default in implementation)
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
