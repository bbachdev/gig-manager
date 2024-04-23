import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";
import { userTable, sessionTable } from "@/util/schema";
import { initDb } from '@/util/db';

export const adapter = new DrizzlePostgreSQLAdapter(initDb(), sessionTable, userTable);