
import { type Request, type Response, type NextFunction } from 'express';

// logs each request method and url
export const logger = (req: Request, res: Response, next: NextFunction): void => {
    console.log(`✨ ${req.method} ${req.url}`);
    next();
}