
// entry point of the application

import express, { type Application, type Request, type Response } from 'express';
import profileInfoRoutes from './routes/profile-info-routes.ts';
import config from './config/config.ts';
import { logger } from './middlewares/logger.ts';
import { errorHandler } from './middlewares/errors/error-handler.ts';

// init app
const app: Application = express();

app.use('/favicon.ico', express.static('assets/favicon.ico'));

app.use(express.json());

app.use(logger);

// simple route to check server status
app.get("/", (req: Request, res: Response) => {
    res.send('server API is running 🚀');
});

// keep routes in separate files
app.use("/profile", profileInfoRoutes);

app.use(errorHandler);

// fallback route for unmatched endpoints
app.use((req, res, next) => {
    res.status(404).send("page not found")
})


app.listen(config.port, () => {
    console.log(`💫 listening on port ${config.port}...`);
});