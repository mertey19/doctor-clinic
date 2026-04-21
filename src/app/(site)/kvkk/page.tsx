import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { LegalContactBlock } from "@/components/site/legal-contact-block";

export const metadata: Metadata = {
  title: "KVKK Ayd\u0131nlatma Metni",
  description:
    "6698 say\u0131l\u0131 Ki\u015fisel Verilerin Korunmas\u0131 Kanunu kapsam\u0131nda veri sorumlusu taraf\u0131ndan yap\u0131lan ayd\u0131nlatma metni.",
};

export default function KvkkPage() {
  return (
    <div>
      <PageHero>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">{"Yasal"}</p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl font-medium tracking-tight text-[var(--foreground)] sm:text-5xl">
          {"KVKK Ayd\u0131nlatma Metni"}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--muted-foreground)]">
          {
            "6698 say\u0131l\u0131 Ki\u015fisel Verilerin Korunmas\u0131 Kanunu (\u201cKVKK\u201d) md. 10 uyar\u0131nca veri sorumlusu s\u0131fat\u0131yla bilgilendirme metni."
          }
        </p>
      </PageHero>

      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="space-y-8 text-[var(--muted-foreground)] [&_h2]:font-serif [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-[var(--foreground)] [&_h3]:mt-6 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-[var(--foreground)] [&_li]:mt-2 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-5">
          <p>
            {
              "\u0130\u015fbu ayd\u0131nlatma metni, ki\u015fisel verilerinizin 6698 say\u0131l\u0131 KVKK ve ilgili mevzuat \u00e7er\u00e7evesinde, veri sorumlusu taraf\u0131ndan i\u015flenmesine ili\u015fkin esaslar hakk\u0131nda sizleri bilgilendirmek amac\u0131yla haz\u0131rlanm\u0131\u015ft\u0131r."
            }
          </p>

          <LegalContactBlock />

          <section>
            <h2>{"\u0130\u015flenen ki\u015fisel veriler"}</h2>
            <p>
              {
                "Tan\u0131t\u0131m ama\u00e7l\u0131 bu web sitesi kapsam\u0131nda; s\u0131n\u0131rl\u0131 olmak \u00fczere kimlik (ad-soyad, unvan), ileti\u015fim (telefon, adres), mesleki deneyim bilgileri ve sitede payla\u015f\u0131lan foto\u011fraf gibi veriler i\u015flenebilmektedir. \u0130leti\u015fim kanallar\u0131 \u00fczerinden taraf\u0131n\u0131zca payla\u015f\u0131lan i\u00e7erikler sakl\u0131d\u0131r."
              }
            </p>
            <p>
              {
                "Web sitesini ziyaretiniz s\u0131ras\u0131nda bar\u0131nd\u0131rma sa\u011flay\u0131c\u0131lar\u0131 ve teknik altyap\u0131 kapsam\u0131nda; g\u00fcvenlik ve i\u015fleyi\u015f i\u00e7in IP adresi, taray\u0131c\u0131 bilgisi, tarih-saat ve benzeri teknik kay\u0131tlar olu\u015fabilir."
              }
            </p>
          </section>

          <section>
            <h2>{"Ki\u015fisel verilerin i\u015flenme ama\u00e7lar\u0131"}</h2>
            <ul>
              <li>{"Tan\u0131t\u0131m ve bilgilendirme faaliyetlerinin y\u00fcr\u00fct\u00fclmesi"}</li>
              <li>{"\u0130leti\u015fim taleplerinin yan\u0131tlanmas\u0131 ve y\u00f6nlendirilmesi"}</li>
              <li>{"Hukuki y\u00fck\u00fcml\u00fcl\u00fcklerin yerine getirilmesi"}</li>
              <li>{"Yetkili kurum ve mercilere bilgi verilmesi"}</li>
              <li>{"Site g\u00fcvenli\u011fi ve hizmet kalitesinin sa\u011flanmas\u0131"}</li>
            </ul>
          </section>

          <section>
            <h2>{"Aktar\u0131m"}</h2>
            <p>
              {
                "Ki\u015fisel verileriniz; yasal zorunluluklar, bar\u0131nd\u0131rma (hosting) ve teknik hizmet sa\u011flay\u0131c\u0131lar\u0131 ile s\u0131n\u0131rl\u0131 olmak \u00fczere, KVKK\u2019n\u0131n 8. ve 9. maddelerine uygun \u015fekilde aktar\u0131labilir. Yurt d\u0131\u015f\u0131na aktar\u0131m s\u00f6z konusu ise gerekli g\u00fcvenceler sa\u011flan\u0131r."
              }
            </p>
          </section>

          <section>
            <h2>{"Toplama y\u00f6ntemi ve hukuki sebep"}</h2>
            <p>
              {
                "Veriler; web sitesi, ileti\u015fim kanallar\u0131 ve otomatik teknik s\u00fcre\u00e7ler yoluyla toplanabilir. \u0130\u015fleme faaliyeti; a\u00e7\u0131k r\u0131za, s\u00f6zle\u015fmenin kurulmas\u0131 veya ifas\u0131, hukuki y\u00fck\u00fcml\u00fcl\u00fck, me\u015fru menfaat veya kanunda \u00f6ng\u00f6r\u00fclen di\u011fer hukuki sebeplere dayanabilir."
              }
            </p>
          </section>

          <section>
            <h2>{"\u0130lgili ki\u015finin KVKK md. 11 kapsam\u0131ndaki haklar\u0131"}</h2>
            <ul>
              <li>{"Ki\u015fisel verilerinizin i\u015flenip i\u015flenmedi\u011fini \u00f6\u011frenme"}</li>
              <li>{"\u0130\u015flenmi\u015fse buna ili\u015fkin bilgi talep etme"}</li>
              <li>{"\u0130\u015flenme amac\u0131n\u0131 ve amac\u0131na uygun kullan\u0131l\u0131p kullan\u0131lmad\u0131\u011f\u0131n\u0131 \u00f6\u011frenme"}</li>
              <li>{"Yurt i\u00e7inde veya yurt d\u0131\u015f\u0131nda aktar\u0131ld\u0131\u011f\u0131 \u00fc\u00e7\u00fcnc\u00fc ki\u015fileri bilme"}</li>
              <li>{"Eksik veya yanl\u0131\u015f i\u015flenmi\u015fse d\u00fczeltilmesini isteme"}</li>
              <li>{"KVKK\u2019da \u00f6ng\u00f6r\u00fclen \u015fartlar \u00e7er\u00e7evesinde silinmesini veya yok edilmesini isteme"}</li>
              <li>
                {
                  "D\u00fczeltme, silme, yok etme i\u015flemlerinin aktar\u0131ld\u0131\u011f\u0131 \u00fc\u00e7\u00fcnc\u00fc ki\u015filere bildirilmesini isteme"
                }
              </li>
              <li>
                {
                  "M\u00fcnhas\u0131ran otomatik sistemler ile analiz edilmesi suretiyle aleyhinize bir sonucun ortaya \u00e7\u0131kmas\u0131na itiraz etme"
                }
              </li>
              <li>
                {
                  "Kanuna ayk\u0131r\u0131 i\u015flenmesi sebebiyle zarara u\u011framan\u0131z h\u00e2linde zarar\u0131n giderilmesini talep etme"
                }
              </li>
            </ul>
          </section>

          <section>
            <h2>{"Ba\u015fvuru"}</h2>
            <p>
              {
                "Haklar\u0131n\u0131z\u0131 kullanmak i\u00e7in yukar\u0131da belirtilen veri sorumlusuna yaz\u0131l\u0131 olarak veya Ki\u015fisel Verileri Koruma Kurulu\u2019nun belirledi\u011fi di\u011fer y\u00f6ntemlerle ba\u015fvurabilirsiniz. Ba\u015fvurunuza ili\u015fkin talepler, kanunda \u00f6ng\u00f6r\u00fclen s\u00fcreler i\u00e7inde sonu\u00e7land\u0131r\u0131l\u0131r."
              }
            </p>
            <p>
              {
                "\u015eik\u00e2yetlerinizi Ki\u015fisel Verileri Koruma Kurulu\u2019na iletebilirsiniz: "
              }
              <a
                href="https://www.kvkk.gov.tr"
                className="font-medium text-[var(--primary)] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.kvkk.gov.tr
              </a>
            </p>
          </section>

          <section>
            <h2>{"\u0130lgili di\u011fer metinler"}</h2>
            <p className="text-sm">
              {"Web sitesi kullan\u0131m\u0131na ili\u015fkin ayr\u0131nt\u0131lar i\u00e7in "}
              <Link href="/gizlilik" className="font-medium text-[var(--primary)] hover:underline">
                {"Gizlilik Politikas\u0131"}
              </Link>
              {" ve "}
              <Link href="/cerez-politikasi" className="font-medium text-[var(--primary)] hover:underline">
                {"\u00c7erez Politikas\u0131"}
              </Link>
              {" sayfalar\u0131na bakabilirsiniz."}
            </p>
          </section>

          <p className="border-t border-[var(--border)] pt-8 text-xs leading-relaxed text-[var(--muted-foreground)]">
            {
              "Bu metin genel bilgilendirme ama\u00e7l\u0131d\u0131r; somut uyu\u015fmazl\u0131klarda veya \u00f6zel durumlarda hukuki dan\u0131\u015fmanl\u0131k al\u0131n\u0131z. Metin, i\u015fleyi\u015f veya mevzuattaki de\u011fi\u015fikliklere ba\u011fl\u0131 olarak g\u00fcncellenebilir."
            }
          </p>
        </div>
      </article>
    </div>
  );
}
