"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const nav = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/about", label: "Hakkımda" },
  { href: "/services", label: "Hizmetler" },
  { href: "/contact", label: "İletişim" },
];

function getClinicInitials(clinicName: string) {
  const blocked = new Set(["dr", "uzm", "prof", "doc", "op", "dt"]);
  const parts = clinicName
    .toLowerCase()
    .replace(/[.,]/g, " ")
    .split(/\s+/)
    .filter((part) => part && !blocked.has(part));
  return parts.slice(0, 2).map((part) => part[0]?.toUpperCase()).join("") || "DR";
}

export function SiteHeader({ clinicName }: { clinicName: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const initials = getClinicInitials(clinicName);

  return (
    <header
      data-site-header
      className="sticky top-0 z-50 border-b border-[var(--border)]/80 bg-[var(--surface)]/85 shadow-[0_1px_0_rgba(255,255,255,0.6)_inset] backdrop-blur-md supports-[backdrop-filter]:bg-[var(--surface)]/75"
    >
      <div
        data-site-header-inner
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <Link
          prefetch={false}
          href="/"
          data-site-logo
          className="group flex items-center gap-2.5 rounded-xl outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--ring)]"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--primary)] to-[#143a62] text-sm font-semibold text-white shadow-soft ring-2 ring-white/30 transition-transform duration-200 group-hover:scale-[1.02]">
            {initials}
          </span>
          <span className="font-serif text-lg font-semibold tracking-tight text-[var(--foreground)]">
            {clinicName}
          </span>
        </Link>

        <nav data-desktop-nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              prefetch={false}
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                pathname === item.href
                  ? "bg-[var(--primary-muted)] text-[var(--primary)]"
                  : "text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div data-header-cta className="hidden md:block">
          <Link
            prefetch={false}
            href="/contact"
            className="inline-flex h-9 items-center justify-center rounded-xl bg-[var(--primary)] px-3.5 text-sm font-medium text-white shadow-soft transition-[transform,box-shadow,background-color] duration-200 hover:bg-[var(--primary-hover)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2"
          >
            İletişim
          </Link>
        </div>

        <button
          type="button"
          data-menu-toggle
          className="rounded-lg p-2 text-[var(--foreground)] md:hidden"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          onClick={(e) => {
            e.preventDefault();
            setOpen((v) => !v);
          }}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <div
          data-mobile-nav-panel
          className="border-t border-[var(--border)] bg-[var(--surface)] px-4 py-4 md:hidden"
        >
          <nav className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                prefetch={false}
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-sm font-medium",
                  pathname === item.href
                    ? "bg-[var(--primary-muted)] text-[var(--primary)]"
                    : "text-[var(--foreground)]"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button className="mt-2 w-full" size="sm" asChild>
              <Link prefetch={false} href="/contact" onClick={() => setOpen(false)}>
                İletişim
              </Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
