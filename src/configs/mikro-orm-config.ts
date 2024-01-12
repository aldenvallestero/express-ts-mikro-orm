import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { Options, PostgreSqlDriver } from '@mikro-orm/postgresql';
import { DATABASE_CREDENTIALS } from '../commons/app-references-common';

const config: Options = {
  driver: PostgreSqlDriver,
  clientUrl: DATABASE_CREDENTIALS.DB_HOST,
  dbName: DATABASE_CREDENTIALS.DB_NAME,
  user: DATABASE_CREDENTIALS.DB_USERNAME,
  password: DATABASE_CREDENTIALS.DB_PASSWORD,
  port: DATABASE_CREDENTIALS.DB_PORT,
  entities: ['dist/**/*-entity.js'],
  entitiesTs: ['src/**/*-entity.ts'],
  metadataProvider: TsMorphMetadataProvider,
  debug: true,
};

export default config;
