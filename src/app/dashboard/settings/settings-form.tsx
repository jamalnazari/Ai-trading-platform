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
          <CardTitle>عمومی</CardTitle>
          <CardDescription>
            هویت برند برای وب‌سایت عمومی و داشبورد.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <Field label="نام وب‌سایت" hint="در عنوان مرورگر و فوتر نمایش داده می‌شود.">
            <Input
              value={websiteName}
              onChange={(event) => setWebsiteName(event.target.value)}
              maxLength={40}
            />
          </Field>

          <div className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-zinc-300">لوگو</span>
            <div className="flex items-center gap-4">
              <span className="flex size-16 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                {logoPreview ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={logoPreview}
                    alt="پیش‌نمایش لوگوی بارگذاری‌شده"
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
                  بارگذاری لوگو
                </Button>
                <p className="text-xs text-zinc-600">
                  <ImageIcon className="me-1 inline size-3" aria-hidden />
                  PNG یا SVG · مربعی · حداکثر ۱ مگابایت
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
            label="پوسته"
            hint="پوسته‌های روشن و سیستم در نسخه‌های آینده اضافه می‌شوند."
          >
            <Select value={theme} onChange={(event) => setTheme(event.target.value)}>
              <option value="dark">تیره (پیش‌فرض)</option>
              <option value="light" disabled>
                روشن — به‌زودی
              </option>
              <option value="system" disabled>
                سیستم — به‌زودی
              </option>
            </Select>
          </Field>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>دسترس‌پذیری</CardTitle>
          <CardDescription>
            کنترل رفتار وب‌سایت عمومی در بازه‌های تعمیر و نگهداری.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between gap-6 rounded-xl border border-white/8 bg-white/[0.02] p-4">
            <div>
              <p className="text-sm font-medium text-zinc-200">
                حالت تعمیر و نگهداری
              </p>
              <p className="mt-1 text-sm text-zinc-500">
                وقتی فعال باشد، وب‌سایت عمومی پیام تعمیر نشان می‌دهد. داشبورد
                مدیریت همچنان در دسترس می‌ماند.
              </p>
            </div>
            <Switch
              checked={maintenance}
              onChange={setMaintenance}
              aria-label="تغییر وضعیت حالت تعمیر و نگهداری"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>امکانات آینده</CardTitle>
          <CardDescription>
            ماژول‌های رزروشده از نقشه راه محصول — با عرضه هر ماژول، همین‌جا
            قابل فعال‌سازی می‌شوند.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {[
            {
              icon: Sparkles,
              name: "ماژول هوش مصنوعی",
              description:
                "تحلیل خودکار ورودی‌های ژورنال و صورت‌حساب‌های معاملاتی.",
              version: "نسخه ۲",
            },
            {
              icon: Bell,
              name: "هشدار قیمت",
              description:
                "واچ‌لیست‌ها و اعلان‌ها برای سطوح قیمتی موردنظر.",
              version: "نسخه ۳",
            },
            {
              icon: Bot,
              name: "ایجنت معاملاتی",
              description:
                "ایجنت مستقلی که عملکرد را مرور می‌کند و اقدام پیشنهادی می‌دهد.",
              version: "نسخه ۴",
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
                  <p className="flex flex-wrap items-center gap-2 text-sm font-medium text-zinc-300">
                    {feature.name}
                    <Badge variant="soon">{feature.version} · به‌زودی</Badge>
                  </p>
                  <p className="mt-1 text-sm text-zinc-500">
                    {feature.description}
                  </p>
                </div>
              </div>
              <Switch
                checked={false}
                disabled
                aria-label={`${feature.name} (به‌زودی)`}
              />
            </div>
          ))}
        </CardContent>
        <CardFooter className="justify-between">
          <p className="text-xs text-zinc-600">
            تغییرات بلافاصله روی این نسخه اعمال می‌شود.
          </p>
          <Button variant="primary" size="md" onClick={handleSave}>
            {saved ? (
              <>
                <Check className="size-4" aria-hidden />
                ذخیره شد
              </>
            ) : (
              "ذخیره تغییرات"
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
