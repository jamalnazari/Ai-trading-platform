"use client";

import { Eye, Pencil, Plus, Search, Trash2, TriangleAlert } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog } from "@/components/ui/dialog";
import { Input, Select } from "@/components/ui/input";
import { Pagination } from "@/components/ui/pagination";
import { StatusBadge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { Table, Td, Th, Tr } from "@/components/ui/table";
import { formatDate } from "@/lib/utils";
import type { AdminUser, UserStatus } from "@/lib/data";

type DialogState =
  | { mode: "view"; user: AdminUser }
  | { mode: "edit"; user: AdminUser }
  | { mode: "delete"; user: AdminUser }
  | { mode: "add" }
  | null;

const PAGE_SIZE = 8;

function nextUserId(users: AdminUser[]): string {
  const maxId = users.reduce((max, user) => {
    const numeric = Number(user.id.split("-")[1]);
    return Number.isFinite(numeric) ? Math.max(max, numeric) : max;
  }, 1000);
  return `TI-${maxId + 1}`;
}

export function UsersTable({ initialUsers }: { initialUsers: AdminUser[] }) {
  const [users, setUsers] = useState<AdminUser[]>(initialUsers);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | UserStatus>("all");
  const [page, setPage] = useState(1);
  const [dialog, setDialog] = useState<DialogState>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return users.filter((user) => {
      const matchesQuery =
        !q ||
        user.name.toLowerCase().includes(q) ||
        user.username.toLowerCase().includes(q) ||
        user.email.toLowerCase().includes(q) ||
        user.id.toLowerCase().includes(q);
      const matchesStatus =
        statusFilter === "all" || user.status === statusFilter;
      return matchesQuery && matchesStatus;
    });
  }, [users, query, statusFilter]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const pageItems = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  function handleAdd(formData: FormData) {
    const user: AdminUser = {
      id: nextUserId(users),
      name: String(formData.get("name") ?? "").trim(),
      username: String(formData.get("username") ?? "")
        .trim()
        .toLowerCase(),
      email: String(formData.get("email") ?? "").trim(),
      status: (String(formData.get("status") ?? "invited") as UserStatus),
      createdAt: new Date().toISOString(),
    };
    if (!user.name || !user.username || !user.email) return;
    setUsers((prev) => [user, ...prev]);
    setDialog(null);
  }

  function handleEdit(formData: FormData) {
    if (dialog?.mode !== "edit") return;
    const id = dialog.user.id;
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id
          ? {
              ...user,
              name: String(formData.get("name") ?? "").trim() || user.name,
              username:
                String(formData.get("username") ?? "").trim() || user.username,
              email: String(formData.get("email") ?? "").trim() || user.email,
              status: (String(formData.get("status") ?? user.status) as UserStatus),
            }
          : user,
      ),
    );
    setDialog(null);
  }

  function handleDelete(id: string) {
    setUsers((prev) => prev.filter((user) => user.id !== id));
    setDialog(null);
  }

  return (
    <Card className="overflow-hidden">
      {/* Toolbar */}
      <div className="flex flex-col gap-3 border-b border-white/6 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search
            className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-zinc-600"
            aria-hidden
          />
          <Input
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setPage(1);
            }}
            placeholder="Search name, username, email…"
            aria-label="Search users"
            className="pl-9"
          />
        </div>
        <div className="flex items-center gap-3">
          <Select
            value={statusFilter}
            onChange={(event) => {
              setStatusFilter(event.target.value as "all" | UserStatus);
              setPage(1);
            }}
            aria-label="Filter by status"
            className="w-36"
          >
            <option value="all">All statuses</option>
            <option value="active">Active</option>
            <option value="invited">Invited</option>
            <option value="suspended">Suspended</option>
          </Select>
          <Button
            variant="primary"
            size="md"
            onClick={() => setDialog({ mode: "add" })}
          >
            <Plus className="size-4" aria-hidden />
            Add User
          </Button>
        </div>
      </div>

      {/* Table */}
      <Table>
        <thead>
          <tr>
            <Th className="pl-4">ID</Th>
            <Th>Name</Th>
            <Th>Username</Th>
            <Th>Email</Th>
            <Th>Status</Th>
            <Th>Created</Th>
            <Th className="pr-4 text-right">Actions</Th>
          </tr>
        </thead>
        <tbody>
          {pageItems.length === 0 ? (
            <tr>
              <td
                colSpan={7}
                className="border-b border-white/5 px-4 py-16 text-center text-sm text-zinc-500"
              >
                No users match your search.
              </td>
            </tr>
          ) : (
            pageItems.map((user) => (
              <Tr key={user.id}>
                <Td className="pl-4 font-mono text-xs text-zinc-500">
                  {user.id}
                </Td>
                <Td>
                  <span className="flex items-center gap-3">
                    <Avatar name={user.name} />
                    <span className="font-medium text-zinc-200">
                      {user.name}
                    </span>
                  </span>
                </Td>
                <Td className="font-mono text-xs text-zinc-400">
                  @{user.username}
                </Td>
                <Td className="text-zinc-400">{user.email}</Td>
                <Td>
                  <StatusBadge status={user.status} />
                </Td>
                <Td className="text-zinc-400 tabular-nums">
                  {formatDate(user.createdAt)}
                </Td>
                <Td className="pr-4">
                  <span className="flex items-center justify-end gap-1">
                    <button
                      type="button"
                      onClick={() => setDialog({ mode: "view", user })}
                      aria-label={`View ${user.name}`}
                      title="View"
                      className="rounded-lg p-2 text-zinc-500 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      <Eye className="size-4" aria-hidden />
                    </button>
                    <button
                      type="button"
                      onClick={() => setDialog({ mode: "edit", user })}
                      aria-label={`Edit ${user.name}`}
                      title="Edit"
                      className="rounded-lg p-2 text-zinc-500 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      <Pencil className="size-4" aria-hidden />
                    </button>
                    <button
                      type="button"
                      onClick={() => setDialog({ mode: "delete", user })}
                      aria-label={`Delete ${user.name}`}
                      title="Delete"
                      className="rounded-lg p-2 text-zinc-500 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      <Trash2 className="size-4" aria-hidden />
                    </button>
                  </span>
                </Td>
              </Tr>
            ))
          )}
        </tbody>
      </Table>

      <Pagination
        page={currentPage}
        pageCount={pageCount}
        total={filtered.length}
        pageSize={PAGE_SIZE}
        onPageChange={setPage}
      />

      {/* View dialog */}
      <Dialog
        open={dialog?.mode === "view"}
        onClose={() => setDialog(null)}
        title="User details"
        description={dialog?.mode === "view" ? dialog.user.id : undefined}
        footer={
          <Button variant="secondary" size="md" onClick={() => setDialog(null)}>
            Close
          </Button>
        }
      >
        {dialog?.mode === "view" ? (
          <dl className="grid grid-cols-[100px_1fr] gap-x-4 gap-y-3 text-sm">
            <dt className="text-zinc-500">Name</dt>
            <dd className="text-zinc-200">{dialog.user.name}</dd>
            <dt className="text-zinc-500">Username</dt>
            <dd className="font-mono text-xs text-zinc-300">
              @{dialog.user.username}
            </dd>
            <dt className="text-zinc-500">Email</dt>
            <dd className="text-zinc-300">{dialog.user.email}</dd>
            <dt className="text-zinc-500">Status</dt>
            <dd>
              <StatusBadge status={dialog.user.status} />
            </dd>
            <dt className="text-zinc-500">Created</dt>
            <dd className="text-zinc-300 tabular-nums">
              {formatDate(dialog.user.createdAt)}
            </dd>
            <dt className="text-zinc-500">Role</dt>
            <dd className="text-zinc-300">Member</dd>
          </dl>
        ) : null}
      </Dialog>

      {/* Edit dialog */}
      <Dialog
        open={dialog?.mode === "edit"}
        onClose={() => setDialog(null)}
        title="Edit user"
        description={
          dialog?.mode === "edit" ? `Editing ${dialog.user.name}` : undefined
        }
        footer={
          <>
            <Button variant="secondary" size="md" onClick={() => setDialog(null)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              size="md"
              type="submit"
              form="edit-user-form"
            >
              Save changes
            </Button>
          </>
        }
      >
        {dialog?.mode === "edit" ? (
          <form
            id="edit-user-form"
            action={handleEdit}
            className="flex flex-col gap-4"
            key={dialog.user.id}
          >
            <div className="flex flex-col gap-1.5">
              <label htmlFor="edit-name" className="text-sm font-medium text-zinc-300">
                Name
              </label>
              <Input id="edit-name" name="name" defaultValue={dialog.user.name} />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="edit-username" className="text-sm font-medium text-zinc-300">
                Username
              </label>
              <Input
                id="edit-username"
                name="username"
                defaultValue={dialog.user.username}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="edit-email" className="text-sm font-medium text-zinc-300">
                Email
              </label>
              <Input
                id="edit-email"
                name="email"
                type="email"
                defaultValue={dialog.user.email}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="edit-status" className="text-sm font-medium text-zinc-300">
                Status
              </label>
              <Select id="edit-status" name="status" defaultValue={dialog.user.status}>
                <option value="active">Active</option>
                <option value="invited">Invited</option>
                <option value="suspended">Suspended</option>
              </Select>
            </div>
          </form>
        ) : null}
      </Dialog>

      {/* Delete confirmation dialog */}
      <Dialog
        open={dialog?.mode === "delete"}
        onClose={() => setDialog(null)}
        title="Delete user"
        className="max-w-sm"
        footer={
          <>
            <Button variant="secondary" size="md" onClick={() => setDialog(null)}>
              Cancel
            </Button>
            <Button
              variant="danger"
              size="md"
              onClick={() =>
                dialog?.mode === "delete" && handleDelete(dialog.user.id)
              }
            >
              Delete
            </Button>
          </>
        }
      >
        {dialog?.mode === "delete" ? (
          <div className="flex gap-3">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-300">
              <TriangleAlert className="size-4" aria-hidden />
            </span>
            <p className="text-sm leading-relaxed text-zinc-400">
              Are you sure you want to delete{" "}
              <span className="font-medium text-zinc-200">
                {dialog.user.name}
              </span>{" "}
              ({dialog.user.email})? This action cannot be undone.
            </p>
          </div>
        ) : null}
      </Dialog>

      {/* Add user dialog */}
      <Dialog
        open={dialog?.mode === "add"}
        onClose={() => setDialog(null)}
        title="Add user"
        description="Create a member account. Invitations are sent by the administrator."
        footer={
          <>
            <Button variant="secondary" size="md" onClick={() => setDialog(null)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              size="md"
              type="submit"
              form="add-user-form"
            >
              Create user
            </Button>
          </>
        }
      >
        <form
          id="add-user-form"
          action={handleAdd}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1.5">
            <label htmlFor="add-name" className="text-sm font-medium text-zinc-300">
              Name
            </label>
            <Input id="add-name" name="name" placeholder="Jane Cooper" required />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="add-username" className="text-sm font-medium text-zinc-300">
              Username
            </label>
            <Input
              id="add-username"
              name="username"
              placeholder="jane.cooper"
              required
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="add-email" className="text-sm font-medium text-zinc-300">
              Email
            </label>
            <Input
              id="add-email"
              name="email"
              type="email"
              placeholder="jane@example.com"
              required
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="add-status" className="text-sm font-medium text-zinc-300">
              Status
            </label>
            <Select id="add-status" name="status" defaultValue="invited">
              <option value="invited">Invited</option>
              <option value="active">Active</option>
              <option value="suspended">Suspended</option>
            </Select>
          </div>
        </form>
      </Dialog>
    </Card>
  );
}
