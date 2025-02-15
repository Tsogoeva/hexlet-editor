import { DataSource } from 'typeorm';
import { snippets1662489659089 } from './migrations/1662489659089-snippets';

export const dataSource = new DataSource({
  type: 'postgres',
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  port: Number(process.env.DATABASE_PORT),
  synchronize: process.env.NODE_ENV !== 'production',
  url: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
  entities: [`${__dirname}/snippets/*.entity.{ts,js}`],
  migrations: [snippets1662489659089],
});
