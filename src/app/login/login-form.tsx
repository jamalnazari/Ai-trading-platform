"use client";

import { AlertCircle, LogIn, User } from "lucide-react";
import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox, Field, Input, PasswordInput } from "@/components/ui/input";
import { loginAction, type LoginState } from "./actions";

const initialState: LoginState = { error: null };

export function LoginForm({ nextPath }: { nextPath: string }) {
  const [state, formAction, pending] = useActionState(
    loginAction,
    initialState,
  );

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <input type="hidden" name="next" value={nextPath} />

      <Field label="Username">
        <Input
          name="username"
          placeholder="admin"
          autoComplete="username"
          autoFocus
          required
          icon={<User aria-hidden />}
        />
      </Field>

      <Field label="Password">
        <PasswordInput
          name="password"
          placeholder="••••••••"
          autoComplete="current-password"
          required
        />
      </Field>

      <Checkbox name="remember" label="Remember me" />

      {state.error ? (
        <p
          role="alert"
          className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-zinc-300"
        >
          <AlertCircle className="size-4 shrink-0 text-accent" aria-hidden />
          {state.error}
        </p>
      ) : null}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={pending}
        className="w-full"
      >
        {pending ? "Signing in…" : "Sign in"}
        {!pending && <LogIn className="size-4" aria-hidden />}
      </Button>
    </form>
  );
}
