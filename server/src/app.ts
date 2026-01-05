
// entry point of the application

import express, { type Application, type Request, type Response } from 'express';
import profileInfoRoutes from './routes/profile-info-routes.ts';

// init app
const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// simple route to check server status
app.get('/', (req: Request, res: Response) => {
    res.send('server API is running 🚀');
});

app.use('/api', profileInfoRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});