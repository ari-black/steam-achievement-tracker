
// defines the structure for errors
export type AppErrorContent = {
    message: string;
    context?: { [key: string]: any };
}

// error base class
export abstract class AppError extends Error {
    abstract readonly statusCode: number;
    abstract readonly logging: boolean;
    abstract readonly content: AppErrorContent[];
    
    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
