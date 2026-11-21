import type { Metadata } from "next";
import { Plug } from "lucide-react";
import { ComingSoon } from "@/components/dashboard/coming-soon";

export const metadata: Metadata = { title: "اتصالات کارگزاری" };

export default function BrokerConnectionsPage() {
  return (
    <ComingSoon
      title="اتصالات کارگزاری"
      icon={Plug}
      version="نسخه ۴"
      description="حساب‌های کارگزاری را متصل کنید تا معاملات به‌جای بارگذاری صورت‌حساب، خودکار همگام شوند. جای اتصال‌ها از روز اول در مدل داده رزرو شده است."
      capabilities={[
        "اتصال امن با API کارگزاری",
        "همگام‌سازی خودکار معاملات",
        "تطبیق در سطح حساب",
        "تجمیع چند کارگزاری",
      ]}
    />
  );
}
