import { eq, and, gte, lte, sql } from "drizzle-orm";
import { useDb } from "~/server/db/client";
import { pageViews, events } from "~/server/db/schema";

export default defineEventHandler(async (event) => {
  const q = getQuery(event);
  const from =
    typeof q.from === "string"
      ? new Date(q.from)
      : new Date(Date.now() - 7 * 24 * 3600 * 1000);
  const to = typeof q.to === "string" ? new Date(q.to) : new Date();

  const db = useDb();

  const e = await db.execute<{ count: string }>(sql`
    SELECT COUNT(*)::bigint AS count FROM ${pageViews}
    WHERE ${pageViews.ts} BETWEEN ${from} AND ${to};
  `);

  // PV par path
  const pvByPath = await db.execute<{ path: string; count: string }>(sql`
    SELECT ${pageViews.path} as path, COUNT(*)::bigint AS count
    FROM ${pageViews}
    WHERE ${pageViews.ts} BETWEEN ${from} AND ${to}
    GROUP BY ${pageViews.path}
    ORDER BY count DESC
    LIMIT 100;
  `);

  // Events par nom
  const evByName = await db.execute<{ name: string; count: string }>(sql`
    SELECT ${events.name} as name, COUNT(*)::bigint AS count
    FROM ${events}
    WHERE ${events.ts} BETWEEN ${from} AND ${to}
    GROUP BY ${events.name}
    ORDER BY count DESC
    LIMIT 100;
  `);

  // Série journalière PV
  const pvDaily = await db.execute<{ day: string; count: string }>(sql`
    SELECT date_trunc('day', ${pageViews.ts})::date AS day, COUNT(*)::bigint AS count
    FROM ${pageViews}
    WHERE ${pageViews.ts} BETWEEN ${from} AND ${to}
    GROUP BY day
    ORDER BY day ASC;
  `);

  return {
    range: { from, to },
    totals: { pageViews: Number(e.rows[0].count) },
    byPath: pvByPath.rows.map((r) => ({
      path: r.path,
      count: Number(r.count),
    })),
    events: evByName.rows.map((r) => ({
      name: r.name,
      count: Number(r.count),
    })),
    pvDaily: pvDaily.rows.map((r) => ({ day: r.day, count: Number(r.count) })),
  };
});
