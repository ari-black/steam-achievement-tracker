/* catch errors thrown in routes and controllers, displaying them in a consistent format */

import { type Request, type Response, type NextFunction } from 'express';
import { AppError } from './error.ts';

// error handling middleware
export const errorHandler = (thisErr: Error, req: Request, res: Response, next: NextFunction) => {
    
    // handled errors
    if (thisErr instanceof AppError) {

        const { statusCode, err, logging } = thisErr;

        // display error in console if logging is enabled
        if (logging) {
            console.error(JSON.stringify({
                code:   thisErr.statusCode,
                err:    thisErr.err,
                stack:  thisErr.showStack ? thisErr.stack : undefined
            }, null, 2));
        }

        // send response
        return res.status(statusCode).json({ err });

    }

    // unhandled errors (always log)
    console.error(JSON.stringify({
        message:    thisErr.message,
        stack:      thisErr.stack
    }, null, 2));

    // send generic internal server error response
    return res.status(500).json({ err: [{ message: '❌ internal server error'}] });
    
}