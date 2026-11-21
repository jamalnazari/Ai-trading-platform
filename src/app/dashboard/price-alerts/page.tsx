import type { Metadata } from "next";
import { Bell } from "lucide-react";
import { ComingSoon } from "@/components/dashboard/coming-soon";

export const metadata: Metadata = { title: "Price Alerts" };

export default function PriceAlertsPage() {
  return (
    <ComingSoon
      title="Price Alerts"
      icon={Bell}
      version="Version 3"
      description="Price monitoring for the instruments in your journal. Set the levels that matter to your plan and get notified — no chart watching required."
      capabilities={[
        "Watchlists synced with your journal",
        "Custom price-level alerts",
        "Browser and email notifications",
        "Alert history tied to trade decisions",
      ]}
    />
  );
}
