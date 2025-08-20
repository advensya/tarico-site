import {
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
  uuid,
  jsonb,
  index,
} from "drizzle-orm/pg-core";

export const pageViews = pgTable(
  "page_views",
  {
    id: serial("id").primaryKey(),
    ts: timestamp("ts", { withTimezone: true }).defaultNow().notNull(),
    path: text("path").notNull(),
    referrer: text("referrer"),
    ua: text("ua"),
    ipHash: varchar("ip_hash", { length: 64 }).notNull(),
    anonId: uuid("anon_id"),
  },
  (t) => ({
    byTs: index("pv_ts_idx").on(t.ts),
    byPath: index("pv_path_idx").on(t.path),
    byAnon: index("pv_anon_idx").on(t.anonId),
  })
);

export const events = pgTable(
  "events",
  {
    id: serial("id").primaryKey(),
    ts: timestamp("ts", { withTimezone: true }).defaultNow().notNull(),
    name: text("name").notNull(),
    payload: jsonb("payload"),
    ua: text("ua"),
    ipHash: varchar("ip_hash", { length: 64 }).notNull(),
    anonId: uuid("anon_id"),
  },
  (t) => ({
    byTs: index("ev_ts_idx").on(t.ts),
    byName: index("ev_name_idx").on(t.name),
    byAnon: index("ev_anon_idx").on(t.anonId),
  })
);
