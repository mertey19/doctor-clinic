import Link from "next/link";
import { getPublishedServices } from "@/lib/services";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { ServiceIcon } from "@/lib/service-icon";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/site/page-hero";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata = { title: "Hizmetler" };

export default async function ServicesPage() {
  const services = await getPublishedServices();

  return (
    <>
      <PageHero>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
          Hizmetler
        </p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl font-medium tracking-tight text-[var(--foreground)] sm:text-5xl">
          Uzmanlık alanları ve hizmetler
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--muted-foreground)]">
          Tanıtım amaçlı özetler; ayrıntılı değerlendirme yüz yüze muayenede yapılır.
        </p>
      </PageHero>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Liste"
          title="Sunulan başlıklar"
          description="Detay sayfasından içerik, süre ve beklentiler hakkında bilgi alabilirsiniz."
        />

        {services.length === 0 ? (
          <Card className="border-dashed border-[var(--border)] bg-[var(--surface)]/80">
            <CardContent className="p-10 text-center">
              <p className="text-sm text-[var(--muted-foreground)]">
                Hizmet listesi şu an hazırlanıyor. Doğrudan klinik iletişimine geçebilirsiniz.
              </p>
              <Button className="mt-6" asChild>
                <Link href="/contact">İletişim</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((s) => (
              <Link key={s.id} href={`/services/${s.slug}`} className="group block h-full">
                <Card className="h-full border-[var(--border)] bg-[var(--surface)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-soft-lg">
                  <CardContent className="flex gap-5 p-6 sm:p-7">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--primary-muted)] text-[var(--primary)] shadow-inner-soft transition-colors group-hover:bg-[var(--primary)] group-hover:text-white">
                      <ServiceIcon iconKey={s.iconKey} className="h-7 w-7" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h2 className="font-serif text-xl text-[var(--foreground)] group-hover:text-[var(--primary)]">
                        {s.title}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]">
                        {s.summary}
                      </p>
                      <div className="mt-4 flex flex-wrap items-center gap-2">
                        {s.durationMin ? (
                          <Badge variant="muted">{s.durationMin} dk</Badge>
                        ) : null}
                        {s.priceNote ? <Badge variant="muted">{s.priceNote}</Badge> : null}
                        <span className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-[var(--primary)] opacity-0 transition-opacity group-hover:opacity-100">
                          İncele
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}

        <Card className="mt-16 overflow-hidden border-0 bg-gradient-to-br from-[var(--primary)] via-[#1e5696] to-[#143a62] text-white shadow-soft-lg">
          <CardContent className="relative p-8 sm:p-10">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" aria-hidden />
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="font-serif text-2xl font-medium">Hangi hizmet size uygun?</h2>
                <p className="mt-2 max-w-xl text-sm text-white/85">
                  Şikayet ve hedefleriniz hakkında bilgi için iletişim bilgilerimizden
                  kliniğe ulaşabilirsiniz.
                </p>
              </div>
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-[var(--primary)] shadow-soft hover:bg-white/95"
                asChild
              >
                <Link href="/contact">İletişim</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
