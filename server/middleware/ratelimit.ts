import { H3Event, getRequestIP } from "h3";
import { LRUCache } from "lru-cache";
import { hashIp } from "~/server/utils/security";

const cache = new LRUCache<string, { count: number; ts: number }>({
  max: 5000,
});

export default defineEventHandler(async (event: H3Event) => {
  const url = event.node.req.url || "";
  if (!url.startsWith("/api/track")) return;

  const { trackingSalt } = useRuntimeConfig();
  const ip = getRequestIP(event, { xForwardedFor: true }) ?? "unknown";
  const key = hashIp(ip, trackingSalt) + ":" + "1m";
  const now = Date.now();
  const item = cache.get(key) || { count: 0, ts: now };

  if (now - item.ts > 60_000) {
    item.count = 0;
    item.ts = now;
  }
  item.count++;
  cache.set(key, item);

  // ex: max 120 req/min par IP hash
  if (item.count > 120) {
    setResponseStatus(event, 429);
    return { ok: false, error: "rate_limited" };
  }
});
