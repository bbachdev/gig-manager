import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";

import postgres from "postgres";
import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/node-postgres";

const dbClient = postgres(`${process.env.DATABASE_URL}`);
const db = drizzle(dbClient);

const userTable = pgTable("user", {
	id: text("id").primaryKey()
});

const sessionTable = pgTable("session", {
	id: text("id").primaryKey(),
	userId: text("user_id")
		.notNull()
		.references(() => userTable.id),
	expiresAt: timestamp("expires_at", {
		withTimezone: true,
		mode: "date"
	}).notNull()
});

export const adapter = new DrizzlePostgreSQLAdapter(db, sessionTable, userTable);
