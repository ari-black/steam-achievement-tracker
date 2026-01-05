
// entry point of the application

import express, { type Application, type Request, type Response } from 'express';
import profileInfoRoutes from './routes/profile-info-routes.ts';
import config from './config/config.ts';

// init app
const app: Application = express();

app.use(express.json());

// simple route to check server status
app.get('/', (req: Request, res: Response) => {
    res.send('server API is running 🚀');
});

app.use('/api', profileInfoRoutes);

app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
});