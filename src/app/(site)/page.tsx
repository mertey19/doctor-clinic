import Link from "next/link";
import { getDoctorProfile } from "@/lib/doctor";
import { getPublishedServices } from "@/lib/services";
import { HomeHero } from "@/components/site/home-hero";

export default async function HomePage() {
  const doctor = await getDoctorProfile();
  const heroDoctor = { ...doctor, photoUrl: "/images/home-doctor.png" };

  const services = await getPublishedServices();

  return (
    <>
      <HomeHero doctor={heroDoctor} />

      <section className="border-b border-[var(--border)] bg-[var(--surface)] py-12 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="border-b border-[var(--border)] pb-3 font-serif text-xl font-medium text-[var(--foreground)] sm:text-2xl">
            Uzmanlık alanları
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--muted-foreground)]">
            Başlıca KBB başlıkları; ayrıntılı açıklama için ilgili sayfayı açın.
          </p>
          <ul className="mt-8 grid gap-px border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2">
            {services.map((s) => (
              <li key={s.id} className="bg-[var(--surface)]">
                <Link
                  href={`/services/${s.slug}`}
                  className="block px-4 py-3.5 text-sm font-medium text-[var(--primary)] transition-colors hover:bg-[var(--primary-muted)]/35 sm:px-5"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm">
            <Link href="/services" className="font-medium text-[var(--primary)] hover:underline">
              Tüm hizmetler
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
