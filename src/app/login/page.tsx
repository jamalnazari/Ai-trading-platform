import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowLeft, KeyRound, ShieldCheck } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { Card } from "@/components/ui/card";
import { getAdminCredentials } from "@/lib/auth";
import { getSession } from "@/lib/session";
import { LoginForm } from "./login-form";

export const metadata: Metadata = {
  title: "Sign in",
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  // Already signed in? Straight to the dashboard.
  const session = await getSession();
  if (session) redirect("/dashboard");

  const params = await searchParams;
  const nextPath =
    params.next && params.next.startsWith("/dashboard")
      ? params.next
      : "/dashboard";

  const credentials = getAdminCredentials();

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center px-6 py-12">
      {/* faint accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 h-72 w-full max-w-2xl rounded-full bg-accent/8 blur-3xl"
      />

      <Link
        href="/"
        className="absolute top-6 left-6 inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-300"
      >
        <ArrowLeft className="size-4" aria-hidden />
        Back to site
      </Link>

      <div className="relative flex w-full max-w-sm flex-col gap-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <Logo markClassName="size-9" />
          <div>
            <h1 className="text-xl font-semibold tracking-tight text-zinc-50">
              Sign in to Trader Insight
            </h1>
            <p className="mt-1 text-sm text-zinc-500">
              Admin access · no registration in MVP
            </p>
          </div>
        </div>

        <Card className="p-6">
          <LoginForm nextPath={nextPath} />
        </Card>

        <div className="rounded-xl border border-dashed border-white/12 bg-white/[0.02] p-4">
          <div className="flex gap-3">
            <KeyRound
              className="mt-0.5 size-4 shrink-0 text-zinc-500"
              aria-hidden
            />
            <div className="text-xs leading-relaxed text-zinc-500">
              <p className="font-medium text-zinc-400">Default credentials</p>
              <p className="mt-1">
                Username{" "}
                <code className="rounded bg-white/8 px-1.5 py-0.5 font-mono text-[11px] text-zinc-300">
                  {credentials.username}
                </code>{" "}
                · Password{" "}
                <code className="rounded bg-white/8 px-1.5 py-0.5 font-mono text-[11px] text-zinc-300">
                  {credentials.password}
                </code>
              </p>
              <p className="mt-2 flex items-start gap-1.5">
                <ShieldCheck
                  className="mt-0.5 size-3.5 shrink-0 text-zinc-600"
                  aria-hidden
                />
                Configurable via{" "}
                <code className="font-mono text-[11px] text-zinc-400">
                  ADMIN_USERNAME
                </code>{" "}
                and{" "}
                <code className="font-mono text-[11px] text-zinc-400">
                  ADMIN_PASSWORD
                </code>{" "}
                backend settings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
