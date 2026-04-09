/**
 * Helpers de tracking — UTM capture, session data, dataLayer events.
 * Usado em conjunto com os 27 campos ocultos do formulario.
 */

export type TrackingData = {
  // UTM
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  // Click IDs
  gclid: string;
  fbclid: string;
  ttclid: string;
  li_fat_id: string;
  msclkid: string;
  // Session
  landing_page: string;
  referrer: string;
  user_agent: string;
  screen_resolution: string;
  viewport_size: string;
  device_type: string;
  browser_language: string;
  timezone: string;
  // Tracking
  session_id: string;
  client_id: string;
  first_visit: string;
  visit_count: string;
  time_on_site: string;
  pages_viewed: string;
  scroll_depth: string;
  // Conversion
  form_name: string;
  conversion_page: string;
};

function getParam(key: string): string {
  if (typeof window === "undefined") return "";
  const params = new URLSearchParams(window.location.search);
  return params.get(key) || "";
}

function getStoredOrNew(key: string, value: string): string {
  if (typeof window === "undefined") return value;
  const stored = sessionStorage.getItem(`gs_${key}`);
  if (stored) return stored;
  sessionStorage.setItem(`gs_${key}`, value);
  return value;
}

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function getDeviceType(): string {
  if (typeof window === "undefined") return "unknown";
  const w = window.innerWidth;
  if (w < 768) return "mobile";
  if (w < 1024) return "tablet";
  return "desktop";
}

export function captureTrackingData(formName: string): TrackingData {
  const now = new Date().toISOString();
  const sessionId = getStoredOrNew("session_id", generateId());
  const clientId = getStoredOrNew("client_id", generateId());
  const firstVisit = getStoredOrNew("first_visit", now);

  const visitCount = typeof window !== "undefined"
    ? String(Number(localStorage.getItem("gs_visit_count") || "0") + 1)
    : "1";

  if (typeof window !== "undefined") {
    localStorage.setItem("gs_visit_count", visitCount);
  }

  return {
    utm_source: getParam("utm_source"),
    utm_medium: getParam("utm_medium"),
    utm_campaign: getParam("utm_campaign"),
    utm_term: getParam("utm_term"),
    utm_content: getParam("utm_content"),
    gclid: getParam("gclid"),
    fbclid: getParam("fbclid"),
    ttclid: getParam("ttclid"),
    li_fat_id: getParam("li_fat_id"),
    msclkid: getParam("msclkid"),
    landing_page: typeof window !== "undefined" ? getStoredOrNew("landing_page", window.location.href) : "",
    referrer: typeof document !== "undefined" ? document.referrer : "",
    user_agent: typeof navigator !== "undefined" ? navigator.userAgent : "",
    screen_resolution: typeof window !== "undefined" ? `${screen.width}x${screen.height}` : "",
    viewport_size: typeof window !== "undefined" ? `${window.innerWidth}x${window.innerHeight}` : "",
    device_type: getDeviceType(),
    browser_language: typeof navigator !== "undefined" ? navigator.language : "",
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    session_id: sessionId,
    client_id: clientId,
    first_visit: firstVisit,
    visit_count: visitCount,
    time_on_site: typeof performance !== "undefined" ? `${Math.round(performance.now() / 1000)}s` : "0s",
    pages_viewed: typeof window !== "undefined"
      ? String(Number(sessionStorage.getItem("gs_pages_viewed") || "0") + 1)
      : "1",
    scroll_depth: "0",
    form_name: formName,
    conversion_page: typeof window !== "undefined" ? window.location.pathname : "",
  };
}

export function pushDataLayerEvent(event: string, data?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...data });
}

export function trackPageView() {
  if (typeof window === "undefined") return;
  const count = Number(sessionStorage.getItem("gs_pages_viewed") || "0") + 1;
  sessionStorage.setItem("gs_pages_viewed", String(count));
}
