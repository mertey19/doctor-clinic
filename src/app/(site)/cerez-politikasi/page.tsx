import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { LegalContactBlock } from "@/components/site/legal-contact-block";

export const metadata: Metadata = {
  title: "\u00c7erez Politikas\u0131",
  description:
    "Web sitesinde kullan\u0131lan \u00e7erezler ve tercihleriniz hakk\u0131nda bilgilendirme.",
};

export default function CerezPolitikasiPage() {
  return (
    <div>
      <PageHero>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">{"Yasal"}</p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl font-medium tracking-tight text-[var(--foreground)] sm:text-5xl">
          {"\u00c7erez Politikas\u0131"}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--muted-foreground)]">
          {
            "\u00c7erezler; ziyaret etti\u011finiz web sitesinin cihaz\u0131n\u0131za yerle\u015ftirdi\u011fi k\u00fc\u00e7\u00fck metin dosyalar\u0131d\u0131r."
          }
        </p>
      </PageHero>

      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="space-y-8 text-[var(--muted-foreground)] [&_h2]:font-serif [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-[var(--foreground)] [&_h3]:mt-6 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-[var(--foreground)] [&_li]:mt-2 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-5">
          <p>
            {
              "Bu site, temel i\u015flevler ve g\u00fcvenlik i\u00e7in gerekli teknik \u00e7erezlerden yararlanabilir. Tan\u0131t\u0131m odakl\u0131 sitede zorunlu olmayan pazarlama \u00e7erezleri kullan\u0131lm\u0131yorsa, a\u015fa\u011f\u0131da buna dair bilgi yer al\u0131r."
            }
          </p>

          <LegalContactBlock />

          <section>
            <h2>{"Kullan\u0131lan \u00e7erez t\u00fcrleri"}</h2>
            <ul>
              <li>
                <strong className="text-[var(--foreground)]">{"Zorunlu / teknik \u00e7erezler: "}</strong>
                {
                  "Sitenin d\u00fczg\u00fcn y\u00fcklenmesi, g\u00fcvenlik ve oturum y\u00f6netimi i\u00e7in gerekebilir (\u00f6r. bar\u0131nd\u0131r\u0131c\u0131 veya uygulama \u00e7er\u00e7evesi kaynakl\u0131)."
                }
              </li>
              <li>
                <strong className="text-[var(--foreground)]">{"Tercih \u00e7erezleri: "}</strong>
                {
                  "Dil veya g\u00f6r\u00fcnt\u00fcleme tercihleri i\u00e7in kullan\u0131l\u0131yorsa, i\u015flevleri kolayla\u015ft\u0131r\u0131r."
                }
              </li>
              <li>
                <strong className="text-[var(--foreground)]">{"Analitik \u00e7erezler: "}</strong>
                {
                  "Ziyaret\u00e7i say\u0131lar\u0131 ve site performans\u0131 i\u00e7in yaln\u0131zca a\u00e7\u0131k\u00e7a etkinle\u015ftirilmi\u015fse kullan\u0131l\u0131r; aksi h\u00e2lde kullan\u0131lmamaktad\u0131r."
                }
              </li>
            </ul>
            <p className="text-sm">
              {
                "Not: \u00dcretim ortam\u0131nda analitik veya reklam \u00e7erezleri eklerseniz bu b\u00f6l\u00fcm\u00fc g\u00fcncellemeniz ve gerekirse onay mekanizmas\u0131 kullanman\u0131z gerekir."
              }
            </p>
          </section>

          <section>
            <h2>{"\u00c7erezleri y\u00f6netme"}</h2>
            <p>
              {
                "Taray\u0131c\u0131 ayarlar\u0131n\u0131zdan \u00e7erezleri silebilir veya engelleyebilirsiniz. \u00c7erezleri tamamen kapatman\u0131z, sitenin baz\u0131 b\u00f6l\u00fcmlerinin \u00e7al\u0131\u015fmas\u0131n\u0131 etkileyebilir."
              }
            </p>
          </section>

          <section>
            <h2>{"\u0130lgili metinler"}</h2>
            <p className="text-sm">
              {"Ki\u015fisel veri i\u015fleme hakk\u0131nda daha fazla bilgi i\u00e7in "}
              <Link href="/kvkk" className="font-medium text-[var(--primary)] hover:underline">
                {"KVKK Ayd\u0131nlatma Metni"}
              </Link>
              {" ve "}
              <Link href="/gizlilik" className="font-medium text-[var(--primary)] hover:underline">
                {"Gizlilik Politikas\u0131"}
              </Link>
              {" sayfalar\u0131na bak\u0131n\u0131z."}
            </p>
          </section>

          <p className="border-t border-[var(--border)] pt-8 text-xs leading-relaxed text-[var(--muted-foreground)]">
            {
              "Bu metin genel bilgilendirme ama\u00e7l\u0131d\u0131r; kulland\u0131\u011f\u0131n\u0131z analitik veya pazarlama ara\u00e7lar\u0131na g\u00f6re g\u00fcncellenmelidir."
            }
          </p>
        </div>
      </article>
    </div>
  );
}
