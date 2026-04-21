import Link from "next/link";
import { getDoctorProfile } from "@/lib/doctor";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/site/page-hero";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Phone } from "lucide-react";

export const metadata = { title: "İletişim" };

export default async function ContactPage() {
  const doctor = await getDoctorProfile();

  return (
    <>
      <PageHero>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
          İletişim
        </p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl font-medium tracking-tight text-[var(--foreground)] sm:text-5xl">
          Klinik ve çalışma bilgileri
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--muted-foreground)]">
          Aşağıdaki bilgiler tanıtım amaçlıdır. Muayene veya tedavi planı için lütfen doğrudan
          klinik ile iletişime geçin; tıbbi değerlendirme yalnızca yüz yüze yapılabilir.
        </p>
      </PageHero>

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <Card className="border-[var(--border)] bg-[var(--surface)] shadow-soft-lg">
          <CardContent className="space-y-5 p-6 sm:p-8">
            <div className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--primary-muted)] text-[var(--primary)]">
                <MapPin className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted-foreground)]">
                  Çalışılan adres / klinik
                </p>
                {doctor.address ? (
                  <p className="mt-1 text-sm leading-relaxed text-[var(--foreground)]">{doctor.address}</p>
                ) : (
                  <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                    Adres bilgisi yakında güncellenecektir.
                  </p>
                )}
              </div>
            </div>

            {doctor.phone ? (
              <div className="flex gap-4 border-t border-[var(--border)] pt-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--accent-muted)] text-[var(--accent)]">
                  <Phone className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted-foreground)]">
                    Telefon
                  </p>
                  <a
                    href={`tel:${doctor.phone.replace(/\s/g, "")}`}
                    className="mt-1 block text-sm font-medium text-[var(--primary)] hover:underline"
                  >
                    {doctor.phone}
                  </a>
                </div>
              </div>
            ) : null}

            <div className="flex gap-4 border-t border-[var(--border)] pt-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--background)] text-[var(--primary)]">
                <Clock className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted-foreground)]">
                  Mesai
                </p>
                <p className="mt-1 text-sm leading-relaxed text-[var(--foreground)]">
                  Hafta içi 09:00–17:00 (örnek; güncel saatler için lütfen telefon ile teyit edin).
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)]/60 p-5 text-sm text-[var(--muted-foreground)]">
          <p>
            Acil durumlarda{" "}
            <span className="font-medium text-[var(--foreground)]">112</span> veya en yakın acil
            servisi arayın. Bu site yalnızca tanıtım amaçlıdır; güncel bilgi için lütfen
            telefon ile kliniğe ulaşın.
          </p>
          <Button variant="outline" className="mt-4 w-full sm:w-auto" asChild>
            <Link href="/about">Hakkımda</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
