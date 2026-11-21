"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  REMEMBER_MAX_AGE,
  SHORT_MAX_AGE,
  SESSION_COOKIE,
  createSessionToken,
  getAdminCredentials,
  sessionCookieOptions,
} from "@/lib/auth";

export interface LoginState {
  error: string | null;
}

/** Only redirect back to admin routes — prevents open redirects. */
function safeNextPath(value: FormDataEntryValue | null): string {
  const path = typeof value === "string" ? value : "";
  return path.startsWith("/dashboard") ? path : "/dashboard";
}

export async function loginAction(
  _prevState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const username = String(formData.get("username") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const remember = formData.get("remember") === "on";
  const nextPath = safeNextPath(formData.get("next"));

  if (!username || !password) {
    return { error: "لطفاً نام کاربری و رمز عبور را وارد کنید." };
  }

  const credentials = getAdminCredentials();
  if (username !== credentials.username || password !== credentials.password) {
    return { error: "نام کاربری یا رمز عبور اشتباه است." };
  }

  const maxAge = remember ? REMEMBER_MAX_AGE : SHORT_MAX_AGE;
  const token = await createSessionToken(username, maxAge);
  const store = await cookies();
  store.set(SESSION_COOKIE, token, sessionCookieOptions(maxAge));

  redirect(nextPath);
}
