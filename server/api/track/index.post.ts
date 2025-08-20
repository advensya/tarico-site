import {
  getHeader,
  getRequestIP,
  setResponseStatus,
  H3Event,
  readBody,
} from "h3";
import { z } from "zod";
import { useDb } from "~/server/db/client";
import { pageViews } from "~/server/db/schema";
import { hashIp, isBotUA } from "~/server/utils/security";

const Body = z.object({
  path: z.string().min(1),
  referrer: z.string().optional(),
  anonId: z.string().uuid().optional(),
});

export default defineEventHandler(async (event: H3Event) => {
  const body = Body.safeParse(await readBody(event));
  if (!body.success) {
    setResponseStatus(event, 400);
    return { ok: false, error: "bad_request" };
  }

  const ua = getHeader(event, "user-agent") || undefined;
  if (isBotUA(ua)) return { ok: true }; // ignore bots

  const ip = getRequestIP(event, { xForwardedFor: true }) ?? null;
  const { trackingSalt } = useRuntimeConfig();
  const ipHash = hashIp(ip, trackingSalt);

  if (body.data.path.startsWith("/admin")) return { ok: false };

  const db = useDb();
  await db.insert(pageViews).values({
    path: body.data.path,
    referrer: body.data.referrer,
    ua,
    ipHash,
    anonId: body.data.anonId ? (body.data.anonId as any) : null,
  });

  return { ok: true };
});
