import type { Metadata } from "next";
import { PageHeader } from "@/components/dashboard/page-header";
import { UsersTable } from "./users-table";
import { users } from "@/lib/data";

export const metadata: Metadata = { title: "Users" };

export default function UsersPage() {
  return (
    <>
      <PageHeader
        title="Users"
        description="Manage member accounts on this Trader Insight instance."
      />
      <UsersTable initialUsers={users} />
    </>
  );
}
