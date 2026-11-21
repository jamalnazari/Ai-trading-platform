import type { Metadata } from "next";
import { Brain } from "lucide-react";
import { ComingSoon } from "@/components/dashboard/coming-soon";

export const metadata: Metadata = { title: "حافظه معاملاتی" };

export default function TradingMemoryPage() {
  return (
    <ComingSoon
      title="حافظه معاملاتی"
      icon={Brain}
      version="نسخه ۲"
      description="حافظه بلندمدت از تاریخچه معاملاتی شما: در شرایط مشابه بازار چگونه رفتار کرده‌اید، چه چیزی جواب داده و کدام اشتباهات تکرار می‌شوند. هم برای دستیار هوش مصنوعی و هم ایجنت معاملاتی تغذیه می‌کند."
      capabilities={[
        "جستجوی تاریخچه ستاپ‌ها و نتایج",
        "بازیابی زمینه برای بازبینی‌های هوش مصنوعی",
        "تشخیص اشتباهات تکرارشونده",
        "پلی‌بوک‌های مبتنی بر شرایط بازار",
      ]}
    />
  );
}
