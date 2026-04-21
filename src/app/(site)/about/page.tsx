import Image from "next/image";
import Link from "next/link";
import { getDoctorProfile } from "@/lib/doctor";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/site/page-hero";
import { Award, BookOpen, MapPin, Phone, Stethoscope } from "lucide-react";

export const metadata = {
  title: "Hakkımda",
};

export default async function AboutPage() {
  const doctor = await getDoctorProfile();
  const aboutPhotoUrl = "/images/about-doctor.png";

  return (
    <>
      <PageHero>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
          Hakkımda
        </p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl font-medium tracking-tight text-[var(--foreground)] sm:text-5xl">
          {doctor.fullName}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--muted-foreground)]">
          {doctor.title}
          {doctor.credentials ? ` · ${doctor.credentials}` : ""}
        </p>
      </PageHero>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[var(--primary-muted)] via-transparent to-[var(--accent-muted)] opacity-90" />
            <Card className="relative overflow-hidden rounded-[1.75rem] border border-white/60 bg-[var(--surface)] shadow-soft-lg ring-1 ring-[var(--border)]/60">
              <CardContent className="p-0">
                {aboutPhotoUrl ? (
                  <Image
                    src={aboutPhotoUrl}
                    alt={doctor.fullName}
                    width={640}
                    height={800}
                    className="aspect-[4/5] w-full object-cover"
                    priority
                  />
                ) : (
                  <div className="flex aspect-[4/5] items-center justify-center bg-gradient-to-b from-[var(--muted)] to-[var(--surface-elevated)] text-sm text-[var(--muted-foreground)]">
                    {"Fotoğraf eklenmedi"}
                  </div>
                )}
              </CardContent>
            </Card>
            <div className="mt-6 grid grid-cols-3 gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-soft sm:p-5">
              <div className="text-center sm:text-left">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-[var(--muted-foreground)]">
                  Deneyim
                </p>
                <p className="mt-1 font-serif text-2xl text-[var(--foreground)]">
                  {doctor.yearsExp ?? "—"}+
                </p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-[var(--muted-foreground)]">
                  Uzmanlık
                </p>
                <p className="mt-1 text-xs font-medium leading-snug text-[var(--foreground)] sm:text-sm">
                  {doctor.specialty}
                </p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-[var(--muted-foreground)]">
                  Mezuniyet
                </p>
                <p className="mt-1 text-xs font-medium leading-snug text-[var(--foreground)] sm:text-sm">
                  Çukurova Üniversitesi Tıp Fakültesi
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-5 text-[var(--muted-foreground)]">
              {doctor.bio.split("\n\n").map((para, i) => (
                <p key={i} className="text-base leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="border-[var(--border)] bg-[var(--surface)]/90 shadow-soft">
                <CardContent className="flex gap-4 p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--primary-muted)] text-[var(--primary)]">
                    <Stethoscope className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted-foreground)]">
                      Uzmanlık
                    </p>
                    <p className="mt-1 text-sm font-medium text-[var(--foreground)]">{doctor.specialty}</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-[var(--border)] bg-[var(--surface)]/90 shadow-soft">
                <CardContent className="flex gap-4 p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--accent-muted)] text-[var(--accent)]">
                    <Award className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted-foreground)]">
                      Unvan
                    </p>
                    <p className="mt-1 text-sm font-medium text-[var(--foreground)]">
                      {doctor.title}
                      {doctor.credentials ? ` · ${doctor.credentials}` : ""}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-[var(--border)] shadow-soft">
              <CardContent className="space-y-4 p-6">
                <div className="flex items-start gap-3">
                  <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-[var(--primary)]" aria-hidden />
                  <div>
                    <p className="text-sm font-semibold text-[var(--foreground)]">
                      Yaklaşımımız
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]">
                      Kararlar birlikte alınır; tetkik ve yönlendirmeler gereksiz yere
                      çoğaltılmaz. Her ziyaretin sonunda net bir özet ve bir sonraki adım
                      paylaşılır.
                    </p>
                  </div>
                </div>
                <dl className="space-y-3 border-t border-[var(--border)] pt-4 text-sm">
                  {doctor.phone ? (
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <dt className="flex items-center gap-2 text-[var(--muted-foreground)]">
                        <Phone className="h-4 w-4 text-[var(--primary)]" aria-hidden />
                        Telefon
                      </dt>
                      <dd>
                        <a
                          href={`tel:${doctor.phone.replace(/\s/g, "")}`}
                          className="font-medium text-[var(--primary)] hover:underline"
                        >
                          {doctor.phone}
                        </a>
                      </dd>
                    </div>
                  ) : null}
                  {doctor.address ? (
                    <div className="flex gap-2">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]" aria-hidden />
                      <div>
                        <dt className="text-[var(--muted-foreground)]">Adres</dt>
                        <dd className="mt-1 text-[var(--foreground)]">{doctor.address}</dd>
                      </div>
                    </div>
                  ) : null}
                </dl>
              </CardContent>
            </Card>

            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="shadow-soft-lg">
                <Link href="/contact">İletişim bilgileri</Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/services">Hizmetler</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <SectionHeading
            eyebrow="Süreç"
            title="Konsültasyon akışı"
            description="İlk görüşmeden düzenli kontrollere kadar sakin ve öngörülebilir bir yol haritası."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Tanışma",
                body: "Öykü, mevcut ilaçlar ve beklentiler netleştirilir.",
              },
              {
                step: "02",
                title: "Plan",
                body: "Tetkik ve kontroller öncelik sırasıyla paylaşılır.",
              },
              {
                step: "03",
                title: "Takip",
                body: "Sonuçlar yorumlanır; bir sonraki adım birlikte belirlenir.",
              },
            ].map((item) => (
              <Card
                key={item.step}
                className="border-[var(--border)] bg-[var(--surface)] transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-soft-lg"
              >
                <CardContent className="p-6">
                  <p className="font-mono text-xs font-semibold text-[var(--primary)]">{item.step}</p>
                  <h3 className="mt-2 font-serif text-lg text-[var(--foreground)]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]">{item.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="mt-16 overflow-hidden border-0 bg-gradient-to-br from-[var(--primary)] via-[#1e5696] to-[#143a62] text-white shadow-soft-lg">
          <CardContent className="relative p-8 sm:p-10">
            <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/10 blur-3xl" aria-hidden />
            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-serif text-2xl font-medium">Sorularınız mı var?</h2>
                <p className="mt-2 max-w-lg text-sm text-white/85">
                  Mesai saatleri içinde telefon veya e-posta ile ulaşabilirsiniz; güncel adres ve
                  çalışma saatleri için iletişim sayfasına bakın.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-[var(--primary)] shadow-soft hover:bg-white/95"
                  asChild
                >
                  <Link href="/contact">İletişime geç</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/40 bg-transparent text-white hover:bg-white/10"
                  asChild
                >
                  <Link href="/services">Hizmetler</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
