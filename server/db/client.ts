import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

let _pool: Pool | null = null;
let _db: ReturnType<typeof drizzle<typeof schema>> | null = null;

export function useDb() {
  if (!_db) {
    const config = useRuntimeConfig();
    _pool = new Pool({
      database: config.database.name,
      port: config.database.port as any as number,
      user: config.database.user,
      password: config.database.password,
      host: config.database.host,
    });
    _db = drizzle(_pool, { schema });
  }
  return _db!;
}
