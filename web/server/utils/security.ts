import crypto from "node:crypto";
import { isbot } from "isbot";
import * as parse from "ua-parser-js";

export function hashIp(ip: string | null, salt: string): string {
  const val = ip ?? "unknown";
  return crypto.createHash("sha256").update(`${val}:${salt}`).digest("hex");
}

export function isBotUA(ua?: string | null): boolean {
  if (!ua) return false;
  return isbot(ua);
}

export function parseUserAgent(ua?: string | null) {
  if (!ua) return { browser: undefined, os: undefined, device: undefined };
  const parsed = parse.UAParser(ua);
  return {
    browser: [parsed.browser.name, parsed.browser.version]
      .filter(Boolean)
      .join(" "),
    os: [parsed.os.name, parsed.os.version].filter(Boolean).join(" "),
    device: parsed.device?.model || parsed.device?.type || undefined,
  };
}
