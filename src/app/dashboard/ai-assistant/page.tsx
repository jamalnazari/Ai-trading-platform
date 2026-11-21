import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import { ComingSoon } from "@/components/dashboard/coming-soon";

export const metadata: Metadata = { title: "دستیار هوش مصنوعی" };

export default function AiAssistantPage() {
  return (
    <ComingSoon
      title="دستیار هوش مصنوعی"
      icon={Sparkles}
      version="نسخه ۲"
      description="لایه هوش مصنوعی که ژورنال و صورت‌حساب‌های شما را می‌خواند و رفتار معاملاتی‌تان را مثل یک مربی حرفه‌ای بازبینی می‌کند. مدل داده از قبل آماده است — نیازی به مهاجرت نیست."
      capabilities={[
        "تشخیص خودکار الگوهای معاملاتی",
        "بررسی سوگیری‌ها و مدیریت ریسک",
        "پاسخ به زبان طبیعی درباره عملکرد شما",
        "خلاصه‌های هفتگی بهبود",
      ]}
    />
  );
}
