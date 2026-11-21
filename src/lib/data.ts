/**
 * Mock data layer (MVP).
 *
 * Every dashboard page reads from this module. When a real backend is
 * connected (e.g. Supabase), replace the exported objects with queries
 * — the shapes below are the contract the UI depends on.
 *
 * Display strings are Persian (the UI language); data keys, names,
 * emails and IDs stay Latin on purpose.
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
  totalVisitsDelta: "+۱۲٫۴٪",
  todayVisits: visitsLast30Days[visitsLast30Days.length - 1],
  weekVisits: visitsLast30Days.slice(-7).reduce((a, b) => a + b, 0),
  monthVisits: visitsLast30Days.reduce((a, b) => a + b, 0),
  uploadedStatements: 342,
  uptime: "۹۹٫۹۸٪",
};

/** Visits by weekday (Sat–Fri — the Persian week) for the bar chart. */
export const visitsByWeekday = [
  { label: "شنبه", value: 580 },
  { label: "یکشنبه", value: 720 },
  { label: "دوشنبه", value: 795 },
  { label: "سه‌شنبه", value: 812 },
  { label: "چهارشنبه", value: 768 },
  { label: "پنجشنبه", value: 690 },
  { label: "جمعه", value: 348 },
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
  { type: "signup", message: "کاربر جدید ثبت‌نام کرد", detail: "Kenji Watanabe با دعوت‌نامه عضو شد", time: "۲ دقیقه پیش" },
  { type: "upload", message: "صورت‌حساب جدید بارگذاری شد", detail: "Q3_broker_export.pdf · ۱٫۲ مگابایت", time: "۱۸ دقیقه پیش" },
  { type: "signin", message: "ورود از دستگاه جدید", detail: "203.0.113.24 · توکیو، ژاپن", time: "۱ ساعت پیش" },
  { type: "settings", message: "تنظیمات به‌روزرسانی شد", detail: "حالت تعمیر و نگهداری غیرفعال شد", time: "۳ ساعت پیش" },
  { type: "signup", message: "کاربر جدید ثبت‌نام کرد", detail: "Priya Sharma با دعوت‌نامه عضو شد", time: "۵ ساعت پیش" },
  { type: "upload", message: "صورت‌حساب جدید بارگذاری شد", detail: "october_trades.csv · ۸۴ کیلوبایت", time: "۸ ساعت پیش" },
  { type: "report", message: "گزارش هفتگی تحلیل‌ها تولید شد", detail: "هفته ۴۶ · ۱٬۲۴۹ بازدید", time: "۱ روز پیش" },
  { type: "signup", message: "کاربر جدید ثبت‌نام کرد", detail: "Lucas Meyer با دعوت‌نامه عضو شد", time: "۲ روز پیش" },
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
  { ip: "203.0.113.24", city: "توکیو", country: "JP", path: "/pricing", browser: "Chrome 141 · macOS", time: "۱۲ دقیقه پیش" },
  { ip: "198.51.100.7", city: "سان‌فرانسیسکو", country: "US", path: "/features", browser: "Safari 18 · iPadOS", time: "۲۶ دقیقه پیش" },
  { ip: "192.0.2.146", city: "لندن", country: "GB", path: "/", browser: "Chrome 140 · Windows", time: "۴۱ دقیقه پیش" },
  { ip: "203.0.113.88", city: "سنگاپور", country: "SG", path: "/roadmap", browser: "Firefox 133 · Linux", time: "۱ ساعت پیش" },
  { ip: "198.51.100.62", city: "برلین", country: "DE", path: "/features", browser: "Edge 131 · Windows", time: "۲ ساعت پیش" },
  { ip: "192.0.2.35", city: "سئول", country: "KR", path: "/login", browser: "Chrome 141 · Android", time: "۳ ساعت پیش" },
  { ip: "203.0.113.101", city: "سیدنی", country: "AU", path: "/", browser: "Safari 17 · macOS", time: "۵ ساعت پیش" },
  { ip: "198.51.100.19", city: "تورنتو", country: "CA", path: "/pricing", browser: "Chrome 140 · iOS", time: "۶ ساعت پیش" },
];
