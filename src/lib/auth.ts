/**
 * Session primitives — pure Web Crypto so they run in both the Node.js
 * runtime (server components, route handlers) and the Edge runtime
 * (middleware). No Node built-ins are imported here.
 */

const encoder = new TextEncoder();
const decoder = new TextDecoder();

export const SESSION_COOKIE = "ti_session";

export interface SessionPayload {
  /** Admin username */
  sub: string;
  role: "admin";
  /** Issued at (ms) */
  iat: number;
  /** Expires at (ms) */
  exp: number;
}

/**
 * The single default administrator account. Credentials are configurable
 * from backend settings (environment variables) — no registration flow
 * exists in the MVP by design.
 */
export function getAdminCredentials() {
  return {
    username: process.env.ADMIN_USERNAME ?? "admin",
    password: process.env.ADMIN_PASSWORD ?? "admin123",
  };
}

function getSecret(): string {
  return process.env.SESSION_SECRET ?? "trader-insight-development-secret";
}

function base64url(bytes: Uint8Array): string {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function base64urlDecode(value: string): Uint8Array {
  const binary = atob(value.replace(/-/g, "+").replace(/_/g, "/"));
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

async function hmac(data: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(getSecret()),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(data));
  return base64url(new Uint8Array(signature));
}

/** Create a signed session token: base64url(payload).hmac */
export async function createSessionToken(
  username: string,
  maxAgeSeconds: number,
): Promise<string> {
  const now = Date.now();
  const payload: SessionPayload = {
    sub: username,
    role: "admin",
    iat: now,
    exp: now + maxAgeSeconds * 1000,
  };
  const data = base64url(encoder.encode(JSON.stringify(payload)));
  return `${data}.${await hmac(data)}`;
}

/** Verify a session token's signature and expiry. */
export async function verifySessionToken(
  token: string | undefined | null,
): Promise<SessionPayload | null> {
  if (!token) return null;
  const [data, signature] = token.split(".");
  if (!data || !signature) return null;
  try {
    if ((await hmac(data)) !== signature) return null;
    const payload = JSON.parse(
      decoder.decode(base64urlDecode(data)),
    ) as SessionPayload;
    if (payload.exp < Date.now()) return null;
    return payload;
  } catch {
    return null;
  }
}

/** Cookie options shared by login + logout. */
export function sessionCookieOptions(maxAgeSeconds: number) {
  return {
    httpOnly: true,
    sameSite: "lax" as const,
    path: "/",
    maxAge: maxAgeSeconds,
    secure: process.env.NODE_ENV === "production",
  };
}

/** "Remember me" -> 30 days, otherwise an 8-hour session. */
export const REMEMBER_MAX_AGE = 60 * 60 * 24 * 30;
export const SHORT_MAX_AGE = 60 * 60 * 8;
