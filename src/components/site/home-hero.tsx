import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Stethoscope } from "lucide-react";

type HeroDoctor = {
  fullName: string;
  title: string;
  specialty: string;
  credentials: string | null;
  photoUrl: string | null;
  yearsExp: number | null;
  bio: string;
};

const copy = {
  ctaPrimary: "İletişim",
  readMore: "Devamını oku",
  photoPlaceholder: "Fotoğraf ekleyin",
};

function bioTeaser(bio: string, max = 420) {
  const first = bio.split(/\n\n/)[0]?.trim() ?? bio.trim();
  if (first.length <= max) return first;
  const cut = first.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > 200 ? cut.slice(0, lastSpace) : cut).trimEnd() + "…";
}

export function HomeHero({ doctor }: { doctor: HeroDoctor }) {
  const bioText = typeof doctor.bio === "string" ? doctor.bio : "";
  const teaser = bioTeaser(bioText);

  return (
    <section className="relative overflow-hidden border-b border-[var(--border)]">
      <div
        className="pointer-events-none absolute inset-0 bg-[length:48px_48px] bg-grid-soft bg-[0_0] opacity-70"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-radial-fade motion-safe:animate-fade-in"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-16 lg:py-24 lg:px-8">
        <div className="motion-safe:animate-fade-up motion-reduce:animate-none">
          <div
            className="inline-flex flex-wrap items-center gap-2"
            style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.5rem" }}
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)]/90 px-3 py-1 text-xs font-medium text-[var(--muted-foreground)] shadow-soft backdrop-blur-sm">
              <Stethoscope className="h-3.5 w-3.5 text-[var(--primary)]" aria-hidden />
              {doctor.specialty}
            </span>
          </div>

          <h1 className="mt-6 font-serif text-4xl font-medium tracking-tight text-balance text-[var(--foreground)] sm:text-5xl lg:text-[3.15rem] lg:leading-[1.12]">
            {doctor.fullName}
          </h1>
          <p className="mt-3 text-lg font-medium text-[var(--foreground)] sm:text-xl">
            {doctor.title}
            {doctor.credentials ? ` — ${doctor.credentials}` : ""}
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--muted-foreground)] sm:text-lg">
            {teaser}{" "}
            <Link
              href="/about"
              className="font-medium text-[var(--primary)] underline decoration-[var(--primary)]/30 underline-offset-2 hover:decoration-[var(--primary)]"
            >
              {copy.readMore}
            </Link>
          </p>

          <div
            className="mt-10 flex flex-wrap gap-3"
            style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}
          >
            <Button asChild size="lg" className="shadow-soft-lg">
              <Link href="/contact">{copy.ctaPrimary}</Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link href="/about">{copy.readMore}</Link>
            </Button>
          </div>

          {doctor.yearsExp != null ? (
            <p className="mt-10 text-sm text-[var(--muted-foreground)]">
              <span className="font-semibold text-[var(--foreground)]">{doctor.yearsExp}+ yıl</span> deneyim ·{" "}
              {doctor.specialty}
            </p>
          ) : null}
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none motion-safe:animate-fade-up motion-reduce:animate-none [animation-delay:120ms]">
          <div
            className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-[var(--primary-muted)] blur-3xl motion-safe:animate-float motion-reduce:animate-none"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-12 -left-8 h-48 w-48 rounded-full bg-[var(--accent-muted)] blur-3xl"
            aria-hidden
          />

          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[var(--primary-muted)] via-transparent to-[var(--accent-muted)] opacity-90" />
            <Card className="relative overflow-hidden rounded-[1.75rem] border border-white/60 bg-[var(--surface)] shadow-soft-lg ring-1 ring-[var(--border)]/60">
              <CardContent className="p-0">
                {doctor.photoUrl ? (
                  <Image
                    src={doctor.photoUrl}
                    alt={doctor.fullName}
                    width={560}
                    height={700}
                    className="aspect-[4/5] h-full w-full object-cover"
                    priority
                  />
                ) : (
                  <div className="flex aspect-[4/5] items-center justify-center bg-gradient-to-b from-[var(--muted)] to-[var(--surface-elevated)] text-sm text-[var(--muted-foreground)]">
                    {copy.photoPlaceholder}
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="absolute -bottom-5 left-4 right-4 sm:left-6 sm:right-6">
              <div
                data-home-hero-nameplate
                className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/95 px-4 py-3 shadow-soft backdrop-blur-md"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--primary-muted)] text-[var(--primary)]">
                  <Award className="h-5 w-5" aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-[var(--foreground)]">{doctor.fullName}</p>
                  <p className="truncate text-xs text-[var(--muted-foreground)]">{doctor.specialty}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
