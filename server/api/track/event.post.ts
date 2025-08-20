import { getHeader, getRequestIP, setResponseStatus, readBody } from "h3";
import { z } from "zod";
import { useDb } from "~/server/db/client";
import { events } from "~/server/db/schema";
import { hashIp, isBotUA } from "~/server/utils/security";

const Body = z.object({
  name: z.string().min(1),
  payload: z.record(z.any()).optional(),
  anonId: z.string().uuid().optional(),
});

export default defineEventHandler(async (event) => {
  const body = Body.safeParse(await readBody(event));
  if (!body.success) {
    setResponseStatus(event, 400);
    return { ok: false, error: "bad_request" };
  }

  const ua = getHeader(event, "user-agent") || undefined;
  if (isBotUA(ua)) return { ok: true };

  const ip = getRequestIP(event, { xForwardedFor: true }) ?? null;
  const { trackingSalt } = useRuntimeConfig();
  const ipHash = hashIp(ip, trackingSalt);

  const db = useDb();
  await db.insert(events).values({
    name: body.data.name,
    payload: body.data.payload as any,
    ua,
    ipHash,
    anonId: body.data.anonId ? (body.data.anonId as any) : null,
  });

  return { ok: true };
});
