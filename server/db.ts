import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from '../drizzle/schema';

// Setup database connection using environment variables
const connectionString = process.env.DATABASE_URL || '';
const client = postgres(connectionString);

// Export the db instance so it can be used across the server
export const db = drizzle(client, { schema });

// --- Apnar jukto kora notun function ---

export async function getFeatureItems() {
  // Nischit kore niben je 'featureTable' apnar schema.ts file-e define kora ache
  // ebong ekhane import kora hoyeche (jemon: schema.featureTable)
  return db.select().from(featureTable);
}