
import { type Request, type Response, type NextFunction } from 'express';

export interface AppError extends Error {
    statusCode?: number;
}

// catch errors thrown in routes and controllers
export const errorHandler = (err: AppError, req: Request, res: Response, next: NextFunction): void => {
    
    // TODO: make error handling work better and separate err handling from services
    console.error(`❌ ${err.message}` || 500);
    res.status(500).json({ error: err.message || 'internal server error' });
}