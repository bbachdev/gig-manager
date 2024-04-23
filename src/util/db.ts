import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

export function initDb () {
  const dbClient = postgres(`${process.env.DATABASE_URL}`);
  const db = drizzle(dbClient);
  return db;
}