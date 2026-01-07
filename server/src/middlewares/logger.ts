/* log each request method and url to console */

import { type Request, type Response, type NextFunction } from 'express';

export const logger = (req: Request, res: Response, next: NextFunction): void => {
    console.log(`✨ ${req.method} ${req.url}`);
    next();
}