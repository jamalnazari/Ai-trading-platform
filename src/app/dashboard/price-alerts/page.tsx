import type { Metadata } from "next";
import { Bell } from "lucide-react";
import { ComingSoon } from "@/components/dashboard/coming-soon";

export const metadata: Metadata = { title: "هشدار قیمت" };

export default function PriceAlertsPage() {
  return (
    <ComingSoon
      title="هشدار قیمت"
      icon={Bell}
      version="نسخه ۳"
      description="پایش قیمت نمادهای موجود در ژورنال شما. سطوح مهم پلن معاملاتی‌تان را تنظیم کنید و مطلع شوید — بدون نیاز به چارت‌نگری مداوم."
      capabilities={[
        "واچ‌لیست‌های هماهنگ با ژورنال",
        "هشدارهای سفارشی سطح قیمت",
        "اعلان مرورگر و ایمیل",
        "تاریخچه هشدارها متصل به تصمیمات معاملاتی",
      ]}
    />
  );
}
