import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import { ComingSoon } from "@/components/dashboard/coming-soon";

export const metadata: Metadata = { title: "AI Assistant" };

export default function AiAssistantPage() {
  return (
    <ComingSoon
      title="AI Assistant"
      icon={Sparkles}
      version="Version 2"
      description="An AI layer that reads your journal and statements, then reviews your trading behavior the way a professional coach would. The data model is already prepared — no migration needed."
      capabilities={[
        "Automatic trade pattern detection",
        "Bias and risk-management review",
        "Plain-language answers about your performance",
        "Weekly improvement summaries",
      ]}
    />
  );
}
