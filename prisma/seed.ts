import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.doctorProfile.upsert({
    where: { slug: "main" },
    update: {
      phone: "444 8 595",
      email: null,
      address: "Güvenevler Mah. 20.Cad No:4 Forum Karşısı, 33140 Yenişehir",
      credentials: "Çukurova Üniversitesi Tıp Fakültesi mezunu · KBB uzmanlık eğitimi",
      bio: `Dr. Ahmet Bozkurt, Çukurova Üniversitesi Tıp Fakültesi mezunudur. Kulak burun boğaz hastalıklarında erişkin ve çocuk hastalara tanı, tedavi ve takip hizmeti sunar. Burun tıkanıklığı, sinüzit, işitme kaybı, baş dönmesi, horlama ve bademcik sorunlarında hasta odaklı yaklaşımı benimser.

Endoskopik muayene, işitme değerlendirmesi ve kişiye özel tedavi planlamasıyla; gereksiz işlemden kaçınan, açıklayıcı ve güven veren bir klinik süreç hedefler.`,
    },
    create: {
      slug: "main",
      title: "Kulak Burun Boğaz Uzmanı",
      fullName: "Uzm. Dr. Ahmet Bozkurt",
      credentials: "Çukurova Üniversitesi Tıp Fakültesi mezunu · KBB uzmanlık eğitimi",
      specialty: "Kulak Burun Boğaz Hastalıkları",
      yearsExp: 16,
      phone: "444 8 595",
      email: null,
      address: "Güvenevler Mah. 20.Cad No:4 Forum Karşısı, 33140 Yenişehir",
      bio: `Dr. Ahmet Bozkurt, Çukurova Üniversitesi Tıp Fakültesi mezunudur. Kulak burun boğaz hastalıklarında erişkin ve çocuk hastalara tanı, tedavi ve takip hizmeti sunar. Burun tıkanıklığı, sinüzit, işitme kaybı, baş dönmesi, horlama ve bademcik sorunlarında hasta odaklı yaklaşımı benimser.

Endoskopik muayene, işitme değerlendirmesi ve kişiye özel tedavi planlamasıyla; gereksiz işlemden kaçınan, açıklayıcı ve güven veren bir klinik süreç hedefler.`,
      photoUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&h=1000&fit=crop",
    },
  });

  const categories = await Promise.all([
    prisma.blogCategory.upsert({
      where: { slug: "burun-sinus" },
      update: {},
      create: { slug: "burun-sinus", name: "Burun ve Sinüs" },
    }),
    prisma.blogCategory.upsert({
      where: { slug: "kulak-isitme" },
      update: {},
      create: { slug: "kulak-isitme", name: "Kulak ve İşitme" },
    }),
    prisma.blogCategory.upsert({
      where: { slug: "cocuk-kbb" },
      update: {},
      create: { slug: "cocuk-kbb", name: "Çocuk KBB" },
    }),
  ]);

  const services = [
    {
      slug: "kbb-genel-muayene",
      title: "KBB genel muayene",
      summary: "Kulak, burun ve boğaz şikâyetlerinde kapsamlı değerlendirme.",
      description: `İlk muayenede şikâyet öykünüz, önceki tedavileriniz ve günlük yaşam etkisi birlikte ele alınır. Gerektiğinde endoskopik değerlendirme ile tanı netleştirilir ve tedavi adımları açık şekilde planlanır.`,
      iconKey: "stethoscope",
      durationMin: 30,
      priceNote: "SGK ve özel sigorta koşullarına göre",
      order: 0,
    },
    {
      slug: "sinuzit-ve-burun-tikanikligi",
      title: "Sinüzit ve burun tıkanıklığı takibi",
      summary: "Alerji, deviasyon ve kronik sinüs sorunlarında kişiye özel yaklaşım.",
      description: `Uzun süren burun tıkanıklığı, yüz ağrısı, geniz akıntısı ve tekrarlayan sinüzit ataklarında medikal tedavi, yaşam düzenlemeleri ve gerekli durumlarda ileri değerlendirme seçenekleri birlikte planlanır.`,
      iconKey: "activity",
      durationMin: 35,
      priceNote: "Endoskopik değerlendirme dahil olabilir",
      order: 1,
    },
    {
      slug: "isitme-ve-bas-donmesi-degerlendirme",
      title: "İşitme ve baş dönmesi değerlendirmesi",
      summary: "İşitme kaybı, kulak çınlaması ve denge sorunlarında sistematik inceleme.",
      description: `İşitme azlığı, kulak dolgunluğu, çınlama ve vertigo şikâyetlerinde odyolojik testler ve klinik muayene birlikte değerlendirilir. Tanıya göre medikal tedavi ve takip planı oluşturulur.`,
      iconKey: "heart-pulse",
      durationMin: 40,
      priceNote: "Odyometri merkezleri ile koordineli takip",
      order: 2,
    },
    {
      slug: "cocuk-kbb-muayenesi",
      title: "Çocuk KBB muayenesi",
      summary: "Bademcik, geniz eti, sık orta kulak iltihabı ve horlamada çocuk odaklı yaklaşım.",
      description: `Çocuk hastalarda sık enfeksiyon, ağızdan nefes alma, horlama ve işitme etkilenmesi gibi sorunlarda aileyle birlikte adım adım değerlendirme yapılır. Gereksiz müdahalelerden kaçınılarak doğru zamanda doğru tedavi hedeflenir.`,
      iconKey: "stethoscope",
      durationMin: 30,
      priceNote: "Çocuk hastaları için uygun zaman dilimleri",
      order: 3,
    },
  ];

  for (const s of services) {
    await prisma.service.upsert({
      where: { slug: s.slug },
      update: {},
      create: { ...s, published: true },
    });
  }

  const posts = [
    {
      slug: "gecmeyen-burun-tikanikligi-nedenleri",
      title: "Geçmeyen burun tıkanıklığı neden olur?",
      excerpt: "Alerji, deviasyon ve kronik sinüzit arasındaki farkları sade şekilde anlatalım.",
      content: `Burun tıkanıklığı kısa süreli bir enfeksiyon sonrası düzelebilir; ancak haftalarca sürüyorsa altta yatan nedenin netleştirilmesi gerekir. En sık nedenler alerjik rinit, burun septum deviasyonu ve kronik sinüzittir.

Muayenede şikâyetin gün içindeki değişimi, tek taraflı olup olmadığı, koku duyusu ve geniz akıntısı birlikte değerlendirilir. Gerektiğinde endoskopik inceleme ile tedavi planı netleştirilir.

Doğru tanı ile gereksiz ilaç kullanımını azaltmak ve nefes konforunu artırmak çoğu hastada mümkündür.`,
      categoryId: categories[0].id,
    },
    {
      slug: "cocuklarda-bademcik-ve-geniz-eti",
      title: "Çocuklarda bademcik ve geniz eti büyümesi",
      excerpt: "Horlama, ağızdan nefes alma ve sık enfeksiyon ne zaman önemlidir?",
      content: `Çocuklarda bademcik ve geniz eti büyümesi; gece horlama, ağız açık uyuma, sık üst solunum yolu enfeksiyonu ve okul performansında düşüşe neden olabilir.

Her bademcik büyümesi ameliyat gerektirmez. Belirti şiddeti, enfeksiyon sıklığı ve işitme/uyku etkisi birlikte değerlendirilerek karar verilir.

Aileye süreci anlaşılır şekilde anlatmak ve düzenli takip planı oluşturmak tedavinin önemli bir parçasıdır.`,
      categoryId: categories[2].id,
    },
    {
      slug: "kulak-cinlamasi-ne-zaman-ciddi",
      title: "Kulak çınlaması ne zaman ciddiye alınmalı?",
      excerpt: "Tek taraflı çınlama, işitme kaybı ve baş dönmesi birlikteyse gecikmeden değerlendirilmelidir.",
      content: `Kulak çınlaması tek başına görülebileceği gibi işitme kaybı, kulakta dolgunluk veya baş dönmesi ile birlikte ortaya çıkabilir. Şikâyetin süresi, tek veya çift taraflı olması ve eşlik eden belirtiler önemlidir.

İlk aşamada odyolojik değerlendirme ve ayrıntılı KBB muayenesi yapılır. Sonuçlara göre medikal tedavi, yaşam düzenlemeleri ve gerekli ileri tetkikler planlanır.

Erken değerlendirme, özellikle tek taraflı ve yeni başlayan şikâyetlerde doğru yönlendirme sağlar.`,
      categoryId: categories[1].id,
    },
  ];

  for (const p of posts) {
    await prisma.blogPost.upsert({
      where: { slug: p.slug },
      update: {},
      create: {
        ...p,
        published: true,
        publishedAt: new Date(),
        coverImage:
          "https://images.unsplash.com/photo-1584515933487-779824d29309?w=1200&h=630&fit=crop",
      },
    });
  }

}

main()
  .then(() => {
    console.log("Veritabanı tohumlama işlemi tamamlandı.");
  })
  .catch((e) => {
    console.error("Veritabanı tohumlama sırasında hata:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
