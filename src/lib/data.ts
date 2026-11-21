/**
 * Mock data layer (MVP).
 *
 * Every dashboard page reads from this module. When a real backend is
 * connected (e.g. Supabase), replace the exported objects with queries
 * — the shapes below are the contract the UI depends on.
 */

export type UserStatus = "active" | "invited" | "suspended";

export interface AdminUser {
  id: string;
  name: string;
  username: string;
  email: string;
  status: UserStatus;
  /** ISO date string */
  createdAt: string;
}

export const users: AdminUser[] = [
  { id: "TI-1001", name: "Kenji Watanabe", username: "kenji.watanabe", email: "kenji.watanabe@gmail.com", status: "active", createdAt: "2026-11-19T09:24:00Z" },
  { id: "TI-1002", name: "Priya Sharma", username: "priya.sharma", email: "priya.sharma@outlook.com", status: "active", createdAt: "2026-11-16T14:02:00Z" },
  { id: "TI-1003", name: "Lucas Meyer", username: "lucas.meyer", email: "l.meyer@protonmail.com", status: "active", createdAt: "2026-11-14T08:41:00Z" },
  { id: "TI-1004", name: "Sofia Rossi", username: "sofia.rossi", email: "sofia.rossi@gmail.com", status: "invited", createdAt: "2026-11-12T17:30:00Z" },
  { id: "TI-1005", name: "Daniel Kim", username: "daniel.kim", email: "daniel.kim@naver.com", status: "active", createdAt: "2026-11-10T11:15:00Z" },
  { id: "TI-1006", name: "Emma Johnson", username: "emma.johnson", email: "emma.j@gmail.com", status: "suspended", createdAt: "2026-11-08T19:48:00Z" },
  { id: "TI-1007", name: "Omar Farouk", username: "omar.farouk", email: "omar.farouk@gmail.com", status: "active", createdAt: "2026-11-05T07:55:00Z" },
  { id: "TI-1008", name: "Yuki Tanaka", username: "yuki.tanaka", email: "yuki.tanaka@yahoo.co.jp", status: "active", createdAt: "2026-11-03T13:27:00Z" },
  { id: "TI-1009", name: "Maria Garcia", username: "maria.garcia", email: "maria.garcia@outlook.com", status: "active", createdAt: "2026-10-30T16:09:00Z" },
  { id: "TI-1010", name: "James O'Connor", username: "james.oconnor", email: "joconnor@gmail.com", status: "active", createdAt: "2026-10-27T10:33:00Z" },
  { id: "TI-1011", name: "Chen Wei", username: "chen.wei", email: "chen.wei@163.com", status: "invited", createdAt: "2026-10-24T09:12:00Z" },
  { id: "TI-1012", name: "Anna Kowalski", username: "anna.kowalski", email: "anna.kowalski@gmail.com", status: "active", createdAt: "2026-10-20T15:44:00Z" },
  { id: "TI-1013", name: "Michael Brown", username: "michael.brown", email: "mbrown@tradersmail.com", status: "suspended", createdAt: "2026-10-17T12:20:00Z" },
  { id: "TI-1014", name: "Laura Muller", username: "laura.muller", email: "laura.muller@web.de", status: "active", createdAt: "2026-10-14T18:06:00Z" },
  { id: "TI-1015", name: "Rafael Silva", username: "rafael.silva", email: "rafael.silva@gmail.com", status: "active", createdAt: "2026-10-11T08:52:00Z" },
  { id: "TI-1016", name: "Hannah Lee", username: "hannah.lee", email: "hannah.lee@gmail.com", status: "invited", createdAt: "2026-10-08T14:37:00Z" },
  { id: "TI-1017", name: "Tom Anderson", username: "tom.anderson", email: "tom.anderson@outlook.com", status: "active", createdAt: "2026-10-04T11:03:00Z" },
  { id: "TI-1018", name: "Ingrid Larsen", username: "ingrid.larsen", email: "ingrid.l@online.no", status: "active", createdAt: "2026-09-29T09:47:00Z" },
  { id: "TI-1019", name: "Ahmed Hassan", username: "ahmed.hassan", email: "ahmed.hassan@gmail.com", status: "active", createdAt: "2026-09-25T17:21:00Z" },
  { id: "TI-1020", name: "Claire Dubois", username: "claire.dubois", email: "claire.dubois@free.fr", status: "invited", createdAt: "2026-09-21T13:58:00Z" },
  { id: "TI-1021", name: "Peter Novak", username: "peter.novak", email: "peter.novak@seznam.cz", status: "active", createdAt: "2026-09-16T10:26:00Z" },
  { id: "TI-1022", name: "Aiko Sato", username: "aiko.sato", email: "aiko.sato@docomo.ne.jp", status: "active", createdAt: "2026-09-10T15:15:00Z" },
  { id: "TI-1023", name: "Victor Cruz", username: "victor.cruz", email: "victor.cruz@gmail.com", status: "active", createdAt: "2026-09-03T08:39:00Z" },
  { id: "TI-1024", name: "Nora Lindqvist", username: "nora.lindqvist", email: "nora.l@gmail.com", status: "invited", createdAt: "2026-08-28T16:52:00Z" },
];

/** Daily website visits for the trailing 30 days (oldest first, last = today). */
export const visitsLast30Days: number[] = [
  128, 141, 149, 152, 138, 79, 71,
  152, 163, 178, 184, 171, 92, 84,
  176, 188, 199, 210, 193, 105, 96,
  201, 214, 226, 218, 189, 232, 241, 227, 189,
];

/** Static headline metrics derived from the series above. */
export const analytics = {
  totalVisits: 18452,
  totalVisitsDelta: "+12.4%",
  todayVisits: visitsLast30Days[visitsLast30Days.length - 1],
  weekVisits: visitsLast30Days.slice(-7).reduce((a, b) => a + b, 0),
  monthVisits: visitsLast30Days.reduce((a, b) => a + b, 0),
  uploadedStatements: 342,
  uptime: "99.98%",
};

/** Visits by weekday (Mon–Sun) for the bar chart. */
export const visitsByWeekday = [
  { label: "Mon", value: 720 },
  { label: "Tue", value: 795 },
  { label: "Wed", value: 812 },
  { label: "Thu", value: 768 },
  { label: "Fri", value: 690 },
  { label: "Sat", value: 348 },
  { label: "Sun", value: 302 },
];

export const topPages = [
  { path: "/", visits: 2318 },
  { path: "/pricing", visits: 1284 },
  { path: "/features", visits: 1102 },
  { path: "/roadmap", visits: 861 },
  { path: "/login", visits: 640 },
];

export type ActivityType =
  | "signup"
  | "upload"
  | "signin"
  | "settings"
  | "report";

export interface ActivityItem {
  type: ActivityType;
  message: string;
  detail: string;
  /** Pre-formatted relative time so SSR and client markup match exactly. */
  time: string;
}

export const recentActivity: ActivityItem[] = [
  { type: "signup", message: "New user registered", detail: "Kenji Watanabe joined via invitation", time: "2 minutes ago" },
  { type: "upload", message: "Statement uploaded", detail: "Q3_broker_export.pdf · 1.2 MB", time: "18 minutes ago" },
  { type: "signin", message: "Sign-in from a new device", detail: "203.0.113.24 · Tokyo, JP", time: "1 hour ago" },
  { type: "settings", message: "Settings updated", detail: "Maintenance mode disabled", time: "3 hours ago" },
  { type: "signup", message: "New user registered", detail: "Priya Sharma joined via invitation", time: "5 hours ago" },
  { type: "upload", message: "Statement uploaded", detail: "october_trades.csv · 84 KB", time: "8 hours ago" },
  { type: "report", message: "Weekly analytics report generated", detail: "Week 46 · 1,249 visits", time: "1 day ago" },
  { type: "signup", message: "New user registered", detail: "Lucas Meyer joined via invitation", time: "2 days ago" },
];

export interface VisitorRow {
  ip: string;
  city: string;
  country: string;
  path: string;
  browser: string;
  time: string;
}

export const recentVisitors: VisitorRow[] = [
  { ip: "203.0.113.24", city: "Tokyo", country: "JP", path: "/pricing", browser: "Chrome 141 · macOS", time: "12 min ago" },
  { ip: "198.51.100.7", city: "San Francisco", country: "US", path: "/features", browser: "Safari 18 · iPadOS", time: "26 min ago" },
  { ip: "192.0.2.146", city: "London", country: "GB", path: "/", browser: "Chrome 140 · Windows", time: "41 min ago" },
  { ip: "203.0.113.88", city: "Singapore", country: "SG", path: "/roadmap", browser: "Firefox 133 · Linux", time: "1 hr ago" },
  { ip: "198.51.100.62", city: "Berlin", country: "DE", path: "/features", browser: "Edge 131 · Windows", time: "2 hrs ago" },
  { ip: "192.0.2.35", city: "Seoul", country: "KR", path: "/login", browser: "Chrome 141 · Android", time: "3 hrs ago" },
  { ip: "203.0.113.101", city: "Sydney", country: "AU", path: "/", browser: "Safari 17 · macOS", time: "5 hrs ago" },
  { ip: "198.51.100.19", city: "Toronto", country: "CA", path: "/pricing", browser: "Chrome 140 · iOS", time: "6 hrs ago" },
];
