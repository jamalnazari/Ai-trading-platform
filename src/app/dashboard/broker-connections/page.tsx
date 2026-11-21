import type { Metadata } from "next";
import { Plug } from "lucide-react";
import { ComingSoon } from "@/components/dashboard/coming-soon";

export const metadata: Metadata = { title: "Broker Connections" };

export default function BrokerConnectionsPage() {
  return (
    <ComingSoon
      title="Broker Connections"
      icon={Plug}
      version="Version 4"
      description="Connect broker accounts to sync fills automatically instead of uploading statements. Connection slots are reserved in the data model from day one."
      capabilities={[
        "Secure broker API connections",
        "Automatic fill synchronization",
        "Account-level reconciliation",
        "Multi-broker aggregation",
      ]}
    />
  );
}
