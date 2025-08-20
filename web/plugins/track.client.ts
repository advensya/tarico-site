function uuidv4() {
  // simple UUID v4
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = crypto.getRandomValues(new Uint8Array(1))[0] & 15;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export default defineNuxtPlugin((nuxtApp) => {
  // anon id en localStorage (pas un cookie)
  let anonId = localStorage.getItem("anon_id");
  if (!anonId) {
    anonId = uuidv4();
    localStorage.setItem("anon_id", anonId);
  }

  const sendPv = (path: string) => {
    const body = JSON.stringify({
      path,
      referrer: document.referrer || undefined,
      anonId,
    });
    const blob = new Blob([body], { type: "application/json" });
    navigator.sendBeacon?.("/api/track", blob) ||
      fetch("/api/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
        keepalive: true,
      }).catch(() => {});
  };

  // initial load
  sendPv(location.pathname + location.search);

  // sur changement de page Nuxt
  nuxtApp.hook("page:finish", () => {
    sendPv(location.pathname + location.search);
  });

  // events custom
  const trackEvent = (name: string, payload?: Record<string, unknown>) => {
    const body = JSON.stringify({ name, payload, anonId });
    const blob = new Blob([body], { type: "application/json" });
    navigator.sendBeacon?.("/api/track/event", blob) ||
      fetch("/api/track-event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
        keepalive: true,
      }).catch(() => {});
  };

  return { provide: { trackEvent } };
});
