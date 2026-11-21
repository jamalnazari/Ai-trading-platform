"use client";

import { Bell, Bot, Check, ImageIcon, Sparkles, Upload } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, Input, Select } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { LogoMark } from "@/components/ui/logo";

export function SettingsForm({ initialWebsiteName }: { initialWebsiteName: string }) {
  const [websiteName, setWebsiteName] = useState(initialWebsiteName);
  const [theme, setTheme] = useState("dark");
  const [maintenance, setMaintenance] = useState(false);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleSave() {
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2500);
  }

  function handleLogoChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    setLogoPreview(URL.createObjectURL(file));
  }

  return (
    <div className="flex flex-col gap-4">
      <Card>
        <CardHeader>
          <CardTitle>General</CardTitle>
          <CardDescription>
            Brand identity for the public website and dashboard.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <Field label="Website name" hint="Shown in the browser title and footer.">
            <Input
              value={websiteName}
              onChange={(event) => setWebsiteName(event.target.value)}
              maxLength={40}
            />
          </Field>

          <div className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-zinc-300">Logo</span>
            <div className="flex items-center gap-4">
              <span className="flex size-16 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                {logoPreview ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={logoPreview}
                    alt="Uploaded logo preview"
                    className="size-14 rounded-lg object-contain"
                  />
                ) : (
                  <LogoMark className="size-9" />
                )}
              </span>
              <div className="flex flex-col gap-1.5">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Upload className="size-3.5" aria-hidden />
                  Upload logo
                </Button>
                <p className="text-xs text-zinc-600">
                  <ImageIcon className="mr-1 inline size-3" aria-hidden />
                  PNG or SVG · square · max 1 MB
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/png,image/svg+xml"
                  className="hidden"
                  onChange={handleLogoChange}
                />
              </div>
            </div>
          </div>

          <Field
            label="Theme"
            hint="Light and system themes are planned for a future release."
          >
            <Select value={theme} onChange={(event) => setTheme(event.target.value)}>
              <option value="dark">Dark (default)</option>
              <option value="light" disabled>
                Light — coming soon
              </option>
              <option value="system" disabled>
                System — coming soon
              </option>
            </Select>
          </Field>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Availability</CardTitle>
          <CardDescription>
            Control how the public website behaves during maintenance windows.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between gap-6 rounded-xl border border-white/8 bg-white/[0.02] p-4">
            <div>
              <p className="text-sm font-medium text-zinc-200">Maintenance mode</p>
              <p className="mt-1 text-sm text-zinc-500">
                When enabled, the public website shows a maintenance notice.
                The admin dashboard stays accessible.
              </p>
            </div>
            <Switch
              checked={maintenance}
              onChange={setMaintenance}
              aria-label="Toggle maintenance mode"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Future features</CardTitle>
          <CardDescription>
            Reserved modules from the product roadmap — they become
            configurable once they ship.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {[
            {
              icon: Sparkles,
              name: "AI Module",
              description:
                "Automated analysis of journal entries and statements.",
              version: "V2",
            },
            {
              icon: Bell,
              name: "Price Alerts",
              description:
                "Watchlists and notifications for price levels.",
              version: "V3",
            },
            {
              icon: Bot,
              name: "Trading Agent",
              description:
                "Autonomous agent that reviews performance and suggests actions.",
              version: "V4",
            },
          ].map((feature) => (
            <div
              key={feature.name}
              className="flex items-center justify-between gap-6 rounded-xl border border-white/8 bg-white/[0.02] p-4"
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg border border-white/8 bg-white/5 text-zinc-500">
                  <feature.icon className="size-4" aria-hidden />
                </span>
                <div>
                  <p className="flex items-center gap-2 text-sm font-medium text-zinc-300">
                    {feature.name}
                    <Badge variant="soon">{feature.version} · Coming soon</Badge>
                  </p>
                  <p className="mt-1 text-sm text-zinc-500">
                    {feature.description}
                  </p>
                </div>
              </div>
              <Switch checked={false} disabled aria-label={`${feature.name} (coming soon)`} />
            </div>
          ))}
        </CardContent>
        <CardFooter className="justify-between">
          <p className="text-xs text-zinc-600">
            Changes apply to this instance immediately.
          </p>
          <Button variant="primary" size="md" onClick={handleSave}>
            {saved ? (
              <>
                <Check className="size-4" aria-hidden />
                Saved
              </>
            ) : (
              "Save changes"
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
