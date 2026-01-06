
import { type Request, type Response, type NextFunction } from 'express';
import { AppError } from './error.ts';

// export interface AppError extends Error {
//     statusCode?: number;
// }

// catch errors thrown in routes and controllers
export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    
    // handled errors
    if (err instanceof AppError) {
        const { statusCode, content, logging } = err;
        if (logging) {
            console.error(JSON.stringify({
                code: err.statusCode,
                content: err.content,
                stack: err.stack
            }, null, 2));
        }

        return res.status(statusCode).json({ content });
    }

    // unhandled errors
    console.error(JSON.stringify({
        message: err.message,
        stack: err.stack
    }, null, 2));
    
    return res.status(500).json({ content: [{ message: '❌ internal server error'}] });
    
}