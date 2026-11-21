import type { Metadata } from "next";
import { Bot } from "lucide-react";
import { ComingSoon } from "@/components/dashboard/coming-soon";

export const metadata: Metadata = { title: "Trading Agent" };

export default function TradingAgentPage() {
  return (
    <ComingSoon
      title="Trading Agent"
      icon={Bot}
      version="Version 4"
      description="An autonomous agent that continuously reviews your journal, applies the rules you define, and prepares pre-trade checklists. Always under your supervision."
      capabilities={[
        "Continuous journal review",
        "Pre-trade checklist generation",
        "Rule-based risk guardrails",
        "Progress reports against your plan",
      ]}
    />
  );
}
