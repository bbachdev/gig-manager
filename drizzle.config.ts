import type { Config } from 'drizzle-kit';

export default {
  schema: './src/util/schema.ts',
  out: './drizzle',
  driver: 'pg',
} satisfies Config;