import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";

import postgres from "postgres";
import { userTable, sessionTable } from "@/util/schema";
import { drizzle } from "drizzle-orm/node-postgres";

const dbClient = postgres(`${process.env.DATABASE_URL}`);
const db = drizzle(dbClient);

export const adapter = new DrizzlePostgreSQLAdapter(db, sessionTable, userTable);
