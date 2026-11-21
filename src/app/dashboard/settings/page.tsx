import type { Metadata } from "next";
import { PageHeader } from "@/components/dashboard/page-header";
import { SettingsForm } from "./settings-form";

export const metadata: Metadata = { title: "تنظیمات" };

export default function SettingsPage() {
  const websiteName = process.env.NEXT_PUBLIC_WEBSITE_NAME ?? "تریدر اینسایت";

  return (
    <>
      <PageHeader
        title="تنظیمات"
        description="پیکربندی این نسخه از پلتفرم تریدر اینسایت."
      />
      <SettingsForm initialWebsiteName={websiteName} />
    </>
  );
}
