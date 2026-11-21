import type { Metadata } from "next";
import { Brain } from "lucide-react";
import { ComingSoon } from "@/components/dashboard/coming-soon";

export const metadata: Metadata = { title: "Trading Memory" };

export default function TradingMemoryPage() {
  return (
    <ComingSoon
      title="Trading Memory"
      icon={Brain}
      version="Version 2"
      description="A long-term memory of your trading history: how you behaved in similar market conditions, what worked before, and which mistakes repeat. Feeds both the AI Assistant and the Trading Agent."
      capabilities={[
        "Searchable history of setups and outcomes",
        "Context retrieval for AI reviews",
        "Recurring-mistake detection",
        "Condition-based playbooks",
      ]}
    />
  );
}
