import "dotenv/config";
import { T_DATABASE_CREDENTIALS } from './app-types-common';

export const DATABASE_CREDENTIALS: T_DATABASE_CREDENTIALS = {
  DB_HOST: process.env.DB_HOST,
  DB_NAME: process.env.DB_NAME,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_PORT: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
}

export const PORT: string | number | undefined = process.env.PORT || 3000;
