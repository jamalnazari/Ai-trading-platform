import type { Metadata } from "next";
import { Bot } from "lucide-react";
import { ComingSoon } from "@/components/dashboard/coming-soon";

export const metadata: Metadata = { title: "ایجنت معاملاتی" };

export default function TradingAgentPage() {
  return (
    <ComingSoon
      title="ایجنت معاملاتی"
      icon={Bot}
      version="نسخه ۴"
      description="ایجنتی مستقل که به‌طور پیوسته ژورنال شما را مرور می‌کند، قوانین تعریف‌شده شما را اعمال می‌کند و چک‌لیست پیش از معامله آماده می‌کند — همیشه زیر نظر شما."
      capabilities={[
        "مرور پیوسته ژورنال",
        "تولید چک‌لیست پیش از معامله",
        "محافظ‌های ریسک مبتنی بر قاعده",
        "گزارش پیشرفت نسبت به پلن شما",
      ]}
    />
  );
}
