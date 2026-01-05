
// entry point of the application

import express, { type Application, type Request, type Response } from 'express';
import profileInfoRoutes from './routes/profile-info-routes.ts';
import config from './config/config.ts';
import { logger } from './middlewares/logger.ts';
import { errorHandler } from './middlewares/error-handler.ts';

// init app
const app: Application = express();

app.use(express.json());
app.use(logger);
app.use(errorHandler);

// simple route to check server status
app.get('/', (req: Request, res: Response) => {
    res.send('server API is running 🚀');
});

app.use('/api', profileInfoRoutes);

app.listen(config.port, () => {
    console.log(`💫 listening on port ${config.port}...`);
});