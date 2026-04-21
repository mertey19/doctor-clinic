import Link from "next/link";
import { ArrowRight } from "lucide-react";

function getClinicInitials(clinicName: string) {
  const blocked = new Set(["dr", "uzm", "prof", "doc", "op", "dt"]);
  const parts = clinicName
    .toLowerCase()
    .replace(/[.,]/g, " ")
    .split(/\s+/)
    .filter((part) => part && !blocked.has(part));
  return parts.slice(0, 2).map((part) => part[0]?.toUpperCase()).join("") || "DR";
}

export function SiteFooter({
  clinicName,
  phone,
  address,
}: {
  clinicName: string;
  phone?: string | null;
  address?: string | null;
}) {
  const initials = getClinicInitials(clinicName);

  return (
    <footer className="relative border-t border-[var(--border)] bg-[var(--surface-elevated)]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--primary)]/35 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--primary)] to-[#143a62] text-sm font-semibold text-white shadow-soft">
                {initials}
              </span>
              <span className="font-serif text-lg font-semibold">{clinicName}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--muted-foreground)]">
              Çukurova Üniversitesi Tıp Fakültesi mezunu bir KBB uzmanı olarak; sakin bir ortamda
              kanıta dayalı ve sevecen sağlık hizmeti sunuyoruz. Sağlığınız ve huzurunuz önceliğimizdir.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-[var(--foreground)]">Klinik</p>
            <ul className="mt-4 space-y-2 text-sm text-[var(--muted-foreground)]">
              {address ? <li className="leading-relaxed">{address}</li> : null}
              {phone ? (
                <li>
                  <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-[var(--primary)]">
                    {phone}
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-[var(--foreground)]">Bağlantılar</p>
            <ul className="mt-4 grid gap-2.5 text-sm">
              <li>
                <Link
                  prefetch={false}
                  href="/services"
                  className="group inline-flex w-full items-center justify-between rounded-xl border border-[var(--border)] bg-white/65 px-3.5 py-2.5 text-[var(--muted-foreground)] transition-all duration-200 hover:border-[var(--primary)]/35 hover:text-[var(--primary)]"
                >
                  <span>Hizmetler</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden />
                </Link>
              </li>
              <li>
                <Link
                  prefetch={false}
                  href="/contact"
                  className="group inline-flex w-full items-center justify-between rounded-xl border border-[var(--border)] bg-white/65 px-3.5 py-2.5 text-[var(--muted-foreground)] transition-all duration-200 hover:border-[var(--primary)]/35 hover:text-[var(--primary)]"
                >
                  <span>İletişim</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden />
                </Link>
              </li>
              <li>
                <Link
                  prefetch={false}
                  href="/site-haritasi"
                  className="group inline-flex w-full items-center justify-between rounded-xl border border-[var(--border)] bg-white/65 px-3.5 py-2.5 text-[var(--muted-foreground)] transition-all duration-200 hover:border-[var(--primary)]/35 hover:text-[var(--primary)]"
                >
                  <span>Site haritası</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-[var(--border)] pt-8">
          <nav aria-label="Yasal bağlantılar" className="flex flex-wrap gap-x-5 gap-y-2 text-xs">
            <Link prefetch={false} href="/kvkk" className="text-[var(--muted-foreground)] hover:text-[var(--primary)]">
              KVKK
            </Link>
            <Link prefetch={false} href="/gizlilik" className="text-[var(--muted-foreground)] hover:text-[var(--primary)]">
              Gizlilik
            </Link>
            <Link
              prefetch={false}
              href="/cerez-politikasi"
              className="text-[var(--muted-foreground)] hover:text-[var(--primary)]"
            >
              Çerez politikası
            </Link>
          </nav>
          <div className="mt-6 flex flex-col items-start justify-between gap-4 text-xs text-[var(--muted-foreground)] sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} {clinicName}. Tüm hakları saklıdır.</p>
            <p className="max-w-md leading-relaxed">
              Bu web sitesi yalnızca tanıtım amaçlıdır. Profesyonel tıbbi tavsiyenin yerine geçmez.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
