import Link from "next/link";
import { notFound } from "next/navigation";
import { getPublishedServiceBySlug } from "@/lib/services";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ServiceIcon } from "@/lib/service-icon";
import { PageHero } from "@/components/site/page-hero";
import { ArrowLeft } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = await getPublishedServiceBySlug(slug);
  if (!service) return { title: "Hizmet" };
  return { title: service.title, description: service.summary };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = await getPublishedServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <PageHero>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--primary)] transition-colors hover:text-[var(--primary-hover)]"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Tüm hizmetler
        </Link>
        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[var(--primary-muted)] text-[var(--primary)] shadow-inner-soft ring-1 ring-[var(--border)]/60">
            <ServiceIcon iconKey={service.iconKey} className="h-8 w-8" />
          </div>
          <div className="min-w-0 flex-1">
            <h1 className="font-serif text-3xl font-medium tracking-tight text-[var(--foreground)] sm:text-4xl">
              {service.title}
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-[var(--muted-foreground)]">{service.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {service.durationMin ? (
                <Badge variant="muted">{service.durationMin} dakika</Badge>
              ) : null}
              {service.priceNote ? <Badge variant="muted">{service.priceNote}</Badge> : null}
            </div>
          </div>
        </div>
      </PageHero>

      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <Card className="border-[var(--border)] shadow-soft">
          <CardContent className="p-6 sm:p-8">
            <div className="max-w-none text-[var(--muted-foreground)]">
              {service.description.split("\n\n").map((para, i) => (
                <p key={i} className="mb-4 text-base leading-relaxed last:mb-0">
                  {para}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild size="lg" className="shadow-soft-lg">
            <Link href="/contact">Klinik ile iletişim</Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link href="/services">Tüm hizmetler</Link>
          </Button>
        </div>
      </article>
    </>
  );
}
