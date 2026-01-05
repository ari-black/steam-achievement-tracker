
import dotenv from 'dotenv';

// load environment variables from .env file
dotenv.config();

// define config interface
interface Config {
    port: number;
    databaseUrl: string;
    steamApiKey: string;
    nodeEnv: string;
}

// load config from environment variables
const config: Config = {
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
    // databaseUrl: process.env.DATABASE_URL || 'sqlite://:memory:',
    databaseUrl: process.env.DATABASE_URL || '',
    steamApiKey: process.env.STEAM_API_KEY || '',
    nodeEnv: process.env.NODE_ENV || 'development',
};

export default config;