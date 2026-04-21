import { prisma } from "@/lib/prisma";

const fallback = {
  id: "fallback",
  slug: "main",
  title: "Kulak Burun Boğaz Uzmanı",
  fullName: "Uzm. Dr. Ahmet Bozkurt",
  credentials: "Çukurova Üniversitesi Tıp Fakültesi mezunu · KBB uzmanlık eğitimi",
  bio: "Dr. Ahmet Bozkurt, Çukurova Üniversitesi Tıp Fakültesi mezunudur. Kulak burun boğaz hastalıklarında erişkin ve çocuk hastalara tanı, tedavi ve takip hizmeti sunar. Burun tıkanıklığı, sinüzit, işitme kaybı, baş dönmesi, horlama ve bademcik sorunlarında hasta odaklı yaklaşımı benimser.\n\nEndoskopik muayene, işitme değerlendirmesi ve kişiye özel tedavi planlamasıyla; gereksiz işlemden kaçınan, açıklayıcı ve güven veren bir klinik süreç hedefler.",
  specialty: "Kulak Burun Boğaz Hastalıkları",
  photoUrl: null as string | null,
  phone: "444 8 595",
  email: null as string | null,
  address: "Güvenevler Mah. 20.Cad No:4 Forum Karşısı, 33140 Yenişehir",
  yearsExp: 16,
  updatedAt: new Date(),
};

export async function getDoctorProfile() {
  try {
    const profile = await prisma.doctorProfile.findFirst({
      where: { slug: "main" },
    });
    if (profile) return profile;
  } catch {
    /* database unavailable — e.g. before first migrate */
  }
  return fallback;
}
