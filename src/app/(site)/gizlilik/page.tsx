import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { LegalContactBlock } from "@/components/site/legal-contact-block";

export const metadata: Metadata = {
  title: "Gizlilik Politikas\u0131",
  description:
    "Web sitesinde ki\u015fisel verilerin korunmas\u0131, kullan\u0131m\u0131 ve haklar\u0131n\u0131z hakk\u0131nda bilgilendirme.",
};

export default function GizlilikPage() {
  return (
    <div>
      <PageHero>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">{"Yasal"}</p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl font-medium tracking-tight text-[var(--foreground)] sm:text-5xl">
          {"Gizlilik Politikas\u0131"}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--muted-foreground)]">
          {
            "Bu politika; web sitesini ziyaret etti\u011finizde veya bizimle ileti\u015fime ge\u00e7ti\u011finizde ki\u015fisel verilerinizin nas\u0131l i\u015flendi\u011fini \u00f6zetler."
          }
        </p>
      </PageHero>

      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="space-y-8 text-[var(--muted-foreground)] [&_h2]:font-serif [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-[var(--foreground)] [&_h3]:mt-6 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-[var(--foreground)] [&_li]:mt-2 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-5">
          <p>
            {
              "Veri sorumlusu olarak ki\u015fisel verilerinizi 6698 say\u0131l\u0131 KVKK ve ilgili mevzuata uygun \u015fekilde i\u015flemeyi taahh\u00fcd ederiz. Ayr\u0131nt\u0131l\u0131 hukuki \u00e7er\u00e7eve i\u00e7in KVKK Ayd\u0131nlatma Metni\u2019ne bakabilirsiniz."
            }
          </p>

          <LegalContactBlock />

          <section>
            <h2>{"Hangi veriler i\u015flenebilir?"}</h2>
            <p>
              {
                "Tan\u0131t\u0131m ama\u00e7l\u0131 site kapsam\u0131nda; kimlik ve ileti\u015fim bilgileri (ad-soyad, unvan, telefon, adres), mesleki i\u00e7erik ve sitede yay\u0131nlanan g\u00f6rsel materyaller ile taraf\u0131n\u0131zdan payla\u015f\u0131lan mesaj i\u00e7erikleri i\u015flenebilir."
              }
            </p>
            <p>
              {
                "Teknik olarak; bar\u0131nd\u0131rma ve g\u00fcvenlik s\u00fcre\u00e7leri kapsam\u0131nda IP adresi, taray\u0131c\u0131 bilgisi, tarih-saat ve benzeri kay\u0131tlar olu\u015fabilir."
              }
            </p>
          </section>

          <section>
            <h2>{"Ama\u00e7lar ve hukuki dayanak"}</h2>
            <ul>
              <li>{"Hizmetin sunulmas\u0131, ileti\u015fim taleplerinin yan\u0131tlanmas\u0131"}</li>
              <li>{"Web sitesinin g\u00fcvenli\u011fi, i\u015fleyi\u015fi ve iyile\u015ftirilmesi"}</li>
              <li>{"Hukuki y\u00fck\u00fcml\u00fcl\u00fcklerin yerine getirilmesi ve yetkili mercilere bilgi verilmesi"}</li>
            </ul>
            <p>
              {
                "\u0130\u015fleme faaliyeti; a\u00e7\u0131k r\u0131za, s\u00f6zle\u015fme, hukuki y\u00fck\u00fcml\u00fcl\u00fck, me\u015fru menfaat veya kanunda \u00f6ng\u00f6r\u00fclen di\u011fer sebeplere dayanabilir."
              }
            </p>
          </section>

          <section>
            <h2>{"Saklama ve g\u00fcvenlik"}</h2>
            <p>
              {
                "Ki\u015fisel veriler, i\u015flenme amac\u0131n\u0131n gerektirdi\u011fi s\u00fcre kadar veya ilgili mevzuatta \u00f6ng\u00f6r\u00fclen s\u00fcreler boyunca saklan\u0131r. Teknik ve idari tedbirlerle yetkisiz eri\u015fime, if\u015fa veya kayba kar\u015f\u0131 uygun g\u00fcvenlik \u00f6nlemleri al\u0131n\u0131r."
              }
            </p>
          </section>

          <section>
            <h2>{"\u00dc\u00e7\u00fcnc\u00fc taraflar ve bar\u0131nd\u0131rma"}</h2>
            <p>
              {
                "Hizmetin sunulmas\u0131 i\u00e7in bar\u0131nd\u0131rma (hosting), alan ad\u0131 ve benzeri teknik hizmet sa\u011flay\u0131c\u0131lar\u0131yla s\u0131n\u0131rl\u0131 payla\u015f\u0131m gerekebilir. Bu tedarik\u00e7iler, veri i\u015fleyen s\u0131fat\u0131yla ve s\u00f6zle\u015fmelerle g\u00fcvence alt\u0131na al\u0131n\u0131r."
              }
            </p>
          </section>

          <section>
            <h2>{"Haklar\u0131n\u0131z"}</h2>
            <p>
              {
                "KVKK kapsam\u0131ndaki haklar\u0131n\u0131z i\u00e7in ayr\u0131nt\u0131l\u0131 a\u00e7\u0131klama ve ba\u015fvuru yollar\u0131 "
              }
              <Link href="/kvkk" className="font-medium text-[var(--primary)] hover:underline">
                {"KVKK Ayd\u0131nlatma Metni"}
              </Link>
              {"nde yer almaktad\u0131r."}
            </p>
          </section>

          <section>
            <h2>{"\u0130lgili di\u011fer metinler"}</h2>
            <p className="text-sm">
              <Link href="/kvkk" className="font-medium text-[var(--primary)] hover:underline">
                {"KVKK Ayd\u0131nlatma Metni"}
              </Link>
              {" ve "}
              <Link href="/cerez-politikasi" className="font-medium text-[var(--primary)] hover:underline">
                {"\u00c7erez Politikas\u0131"}
              </Link>
              {" sayfalar\u0131na da g\u00f6z atabilirsiniz."}
            </p>
          </section>

          <p className="border-t border-[var(--border)] pt-8 text-xs leading-relaxed text-[var(--muted-foreground)]">
            {
              "Bu metin genel bilgilendirme ama\u00e7l\u0131d\u0131r; somut uyu\u015fmazl\u0131klarda veya \u00f6zel durumlarda hukuki dan\u0131\u015fmanl\u0131k al\u0131n\u0131z. Metin g\u00fcncellenebilir."
            }
          </p>
        </div>
      </article>
    </div>
  );
}
