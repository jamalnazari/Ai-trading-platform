import type { Metadata } from "next";
import { PageHeader } from "@/components/dashboard/page-header";
import { UsersTable } from "./users-table";
import { users } from "@/lib/data";

export const metadata: Metadata = { title: "کاربران" };

export default function UsersPage() {
  return (
    <>
      <PageHeader
        title="کاربران"
        description="مدیریت حساب‌های اعضای این نسخه از تریدر اینسایت."
      />
      <UsersTable initialUsers={users} />
    </>
  );
}
