import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Yakalanan değeri kullanıcıya gösterilecek kısa Türkçe metne çevirir (Event → "[object Event]" olmaz). */
export function formatUnknownError(e: unknown): string {
  if (e instanceof Error) return e.message;
  if (typeof e === "string") return e;
  if (typeof Event !== "undefined" && e instanceof Event) {
    return "İşlem tamamlanamadı. Lütfen tekrar deneyin.";
  }
  if (e != null && typeof e === "object") {
    if ("nativeEvent" in e && typeof (e as { nativeEvent?: unknown }).nativeEvent !== "undefined") {
      return "İşlem tamamlanamadı. Lütfen tekrar deneyin.";
    }
    try {
      if (String(e) === "[object Event]") {
        return "İşlem tamamlanamadı. Lütfen tekrar deneyin.";
      }
    } catch {
      /* ignore */
    }
  }
  return "Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.";
}

/** API JSON içindeki `error` alanını güvenli metne çevirir. */
export function formatApiError(error: unknown, fallback = "İşlem başarısız."): string {
  if (typeof error === "string" && error.trim()) return error;
  if (error && typeof error === "object" && "message" in error) {
    const m = (error as { message: unknown }).message;
    if (typeof m === "string" && m.trim()) return m;
  }
  return fallback;
}
