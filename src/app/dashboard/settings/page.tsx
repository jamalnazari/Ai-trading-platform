import type { Metadata } from "next";
import { PageHeader } from "@/components/dashboard/page-header";
import { SettingsForm } from "./settings-form";

export const metadata: Metadata = { title: "Settings" };

export default function SettingsPage() {
  const websiteName = process.env.NEXT_PUBLIC_WEBSITE_NAME ?? "Trader Insight";

  return (
    <>
      <PageHeader
        title="Settings"
        description="Instance configuration for the Trader Insight platform."
      />
      <SettingsForm initialWebsiteName={websiteName} />
    </>
  );
}
