import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, Compass, Cookie, FileText, House, Info, Phone, Shield, Stethoscope } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";

export const metadata = { title: "Site haritas\u0131" };

const pages: { href: string; label: string; description: string; icon: LucideIcon }[] = [
  {
    href: "/",
    label: "Ana Sayfa",
    description: "Klinik yakla\u015f\u0131m\u0131, \u00f6ne \u00e7\u0131kan hizmetler ve h\u0131zl\u0131 y\u00f6nlendirmeler.",
    icon: House,
  },
  {
    href: "/about",
    label: "Hakk\u0131mda",
    description: "Hekim \u00f6zge\u00e7mi\u015fi, e\u011fitim ge\u00e7mi\u015fi ve \u00e7al\u0131\u015fma prensipleri.",
    icon: Info,
  },
  {
    href: "/services",
    label: "Hizmetler",
    description: "Muayene alanlar\u0131, tan\u0131-tedavi ba\u015fl\u0131klar\u0131 ve bilgilendirme i\u00e7erikleri.",
    icon: Stethoscope,
  },
  {
    href: "/contact",
    label: "\u0130leti\u015fim",
    description: "Klinik adresi, telefon bilgisi ve \u00e7al\u0131\u015fma saatleri.",
    icon: Phone,
  },
  {
    href: "/kvkk",
    label: "KVKK ayd\u0131nlatma metni",
    description: "Ki\u015fisel verilerin korunmas\u0131 ve veri sorumlusuna ili\u015fkin bilgilendirme.",
    icon: Shield,
  },
  {
    href: "/gizlilik",
    label: "Gizlilik politikas\u0131",
    description: "Web sitesi ve ziyaret\u00e7i verilerine ili\u015fkin gizlilik ilkeleri.",
    icon: FileText,
  },
  {
    href: "/cerez-politikasi",
    label: "\u00c7erez politikas\u0131",
    description: "\u00c7erez t\u00fcrleri ve tercihleriniz hakk\u0131nda bilgi.",
    icon: Cookie,
  },
];

export default function SiteHaritasiPage() {
  return (
    <>
      <PageHero>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">Site</p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl font-medium tracking-tight text-[var(--foreground)] sm:text-5xl">
          {"Site haritas\u0131"}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--muted-foreground)]">
          {"Kamuya a\u00e7\u0131k sayfalara buradan h\u0131zl\u0131ca ula\u015fabilirsiniz."}
        </p>
      </PageHero>

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-soft-lg sm:p-8">
          <div className="mb-6 flex items-start gap-3 sm:mb-8">
            <span className="mt-0.5 rounded-xl bg-[var(--primary-muted)] p-2 text-[var(--primary)]">
              <Compass className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <p className="text-sm font-semibold text-[var(--foreground)]">{"H\u0131zl\u0131 gezinme"}</p>
              <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                {"A\u015fa\u011f\u0131daki kartlar sitenin temel sayfalar\u0131n\u0131 \u00f6zetler."}
              </p>
            </div>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {pages.map((p) => {
              const Icon = p.icon;
              return (
                <li key={p.href}>
                  <Link
                    prefetch={false}
                    href={p.href}
                    className="group block rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)]/45 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--primary)]/40 hover:shadow-soft"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span className="rounded-lg bg-white/80 p-2 text-[var(--primary)] ring-1 ring-[var(--border)]">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <ArrowUpRight
                        className="h-4 w-4 text-[var(--muted-foreground)] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--primary)]"
                        aria-hidden
                      />
                    </div>
                    <p className="mt-4 text-base font-semibold text-[var(--foreground)]">{p.label}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-[var(--muted-foreground)]">
                      {p.description}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
