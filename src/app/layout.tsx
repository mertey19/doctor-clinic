import type { Metadata } from "next";
import { DM_Sans, Source_Serif_4 } from "next/font/google";
import Script from "next/script";
import "@/app/globals.css";
import "@/app/layout-fallback.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Uzm. Dr. Ahmet Bozkurt | Kulak Burun Boğaz Uzmanı",
    template: "%s | Dr. Ahmet Bozkurt KBB",
  },
  description:
    "Çukurova Üniversitesi Tıp Fakültesi mezunu Uzm. Dr. Ahmet Bozkurt; kulak burun boğaz muayenesi, sinüzit ve alerji takibi, işitme değerlendirmesi ve horlama-uyku sorunlarında uzman KBB hizmeti.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${dmSans.variable} ${sourceSerif.variable} font-sans antialiased`}
        style={{
          /* Yedek: globals.css yüklenmezse bile okunabilir arka plan */
          backgroundColor: "#f4f7fb",
          color: "#15232f",
          minHeight: "100vh",
        }}
      >
        <Script id="suppress-event-as-rejection" strategy="beforeInteractive">
          {`
(function () {
  function isEventLike(x) {
    if (x == null) return false;
    if (typeof Event !== "undefined" && x instanceof Event) return true;
    return Object.prototype.toString.call(x) === "[object Event]";
  }
  function swallowIfEventLike(e) {
    try {
      if (e && isEventLike(e.reason)) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    } catch (_) {}
  }
  window.addEventListener("unhandledrejection", swallowIfEventLike, true);
})();
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
