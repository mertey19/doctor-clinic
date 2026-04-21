import { prisma } from "@/lib/prisma";

export type PublicService = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  iconKey: string | null;
  durationMin: number | null;
  priceNote: string | null;
  order: number;
  published: boolean;
};

const fallbackServices: PublicService[] = [
  {
    id: "fallback-ent-exam",
    slug: "kbb-muayenesi",
    title: "KBB muayenesi",
    summary:
      "Burun, bo\u011faz, kulak ve boyun b\u00f6lgesine y\u00f6nelik genel de\u011ferlendirme ve muayene.",
    description:
      "KBB muayenesi; burun t\u0131kan\u0131kl\u0131\u011f\u0131, bo\u011faz a\u011fr\u0131s\u0131, kulak dolgunlu\u011fu, ses de\u011fi\u015fikli\u011fi ve benzeri \u015fikayetlerde ilk ba\u015fvuru ad\u0131m\u0131d\u0131r.\n\nMuayene s\u0131ras\u0131nda \u015fikayet s\u00fcresi, e\u015flik eden bulgular ve \u00f6nceki tedaviler de\u011ferlendirilir. Gerekli durumda ileri tetkik veya takip plan\u0131 \u00f6nerilir.",
    iconKey: "stethoscope",
    durationMin: 20,
    priceNote: "Muayene \u00fccreti klinikte bildirilir.",
    order: 1,
    published: true,
  },
  {
    id: "fallback-sinus-allergy",
    slug: "sinuzit-ve-alerji-takibi",
    title: "Sin\u00fczit ve alerji takibi",
    summary: "Tekrarlayan burun t\u0131kan\u0131kl\u0131\u011f\u0131, ak\u0131nt\u0131 ve y\u00fcz bas\u0131nc\u0131nda tan\u0131-takip s\u00fcreci.",
    description:
      "Sin\u00fczit ve alerjik nezle \u015fikayetlerinde semptomlar\u0131n s\u0131kl\u0131\u011f\u0131, mevsimsel etkiler ve g\u00fcnl\u00fck ya\u015fama etkisi birlikte ele al\u0131n\u0131r.\n\nTedavi planlamas\u0131nda ila\u00e7 d\u00fczenlemesi, burun bak\u0131m \u00f6nerileri ve takip aral\u0131klar\u0131 hasta \u00f6zelinde belirlenir.",
    iconKey: "activity",
    durationMin: 20,
    priceNote: null,
    order: 2,
    published: true,
  },
  {
    id: "fallback-hearing",
    slug: "isitme-ve-kulak-degerlendirmesi",
    title: "\u0130\u015fitme ve kulak de\u011ferlendirmesi",
    summary:
      "\u0130\u015fitme azalmas\u0131, \u00e7\u0131nlama, kulak dolgunlu\u011fu ve denge ile ili\u015fkili \u015fikayetlerin incelenmesi.",
    description:
      "Kulakla ilgili \u015fikayetlerde otoskopik muayene, semptom hikayesi ve gerekli durumlarda odyolojik y\u00f6nlendirme planlan\u0131r.\n\nAma\u00e7; sorunun kayna\u011f\u0131n\u0131 netle\u015ftirmek ve gereksiz i\u015flemlerden ka\u00e7\u0131narak do\u011fru y\u00f6nlendirme yapmakt\u0131r.",
    iconKey: "heart-pulse",
    durationMin: 20,
    priceNote: null,
    order: 3,
    published: true,
  },
  {
    id: "fallback-snore-sleep",
    slug: "horlama-ve-uyku-sorunlari",
    title: "Horlama ve uyku sorunlar\u0131",
    summary:
      "Horlama, gece nefes duraklamas\u0131 \u015f\u00fcphesi ve uyku kalitesi d\u00fc\u015f\u00fckl\u00fc\u011f\u00fcnde de\u011ferlendirme.",
    description:
      "Horlama ve uyku bozukluklar\u0131nda \u00fcst solunum yolu anatomisi ile klinik hikaye birlikte de\u011ferlendirilir.\n\n\u015eikayetin \u015fiddetine g\u00f6re ya\u015fam tarz\u0131 \u00f6nerileri, takip veya ilgili birimlere y\u00f6nlendirme planlan\u0131r.",
    iconKey: "plane",
    durationMin: 20,
    priceNote: null,
    order: 4,
    published: true,
  },
];

function mapService(service: {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  iconKey: string | null;
  durationMin: number | null;
  priceNote: string | null;
  order: number;
  published: boolean;
}): PublicService {
  return {
    id: service.id,
    slug: service.slug,
    title: service.title,
    summary: service.summary,
    description: service.description,
    iconKey: service.iconKey,
    durationMin: service.durationMin,
    priceNote: service.priceNote,
    order: service.order,
    published: service.published,
  };
}

export async function getPublishedServices(): Promise<PublicService[]> {
  try {
    const services = await prisma.service.findMany({
      where: { published: true },
      orderBy: { order: "asc" },
    });
    if (services.length > 0) return services.map(mapService);
  } catch {
    /* database unavailable */
  }
  return fallbackServices;
}

export async function getPublishedServiceBySlug(slug: string): Promise<PublicService | null> {
  try {
    const service = await prisma.service.findFirst({
      where: { slug, published: true },
    });
    if (service) return mapService(service);
  } catch {
    /* database unavailable */
  }
  return fallbackServices.find((service) => service.slug === slug) ?? null;
}
