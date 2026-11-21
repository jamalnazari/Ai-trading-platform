import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { DashboardShell } from "@/components/dashboard/shell";

export const metadata: Metadata = {
  title: { default: "داشبورد", template: "%s · تریدر اینسایت" },
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Middleware already guards this route; this is defense in depth.
  const session = await getSession();
  if (!session) redirect("/login");

  return <DashboardShell username={session.sub}>{children}</DashboardShell>;
}
