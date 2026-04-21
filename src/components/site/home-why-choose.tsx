import { ClipboardList, HeartPulse, MessageCircle, Timer } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const items = [
  {
    icon: Timer,
    title: "Ayrılmış süre",
    body: "Muayene için yeterli zaman ayrılır; sorularınız aceleye getirilmeden yanıtlanır.",
  },
  {
    icon: ClipboardList,
    title: "Net KBB planı",
    body: "Endoskopi, işitme testi veya ek tetkik gerekliliği açıkça anlatılır; tedavi adımları yazılı özetle paylaşılır.",
  },
  {
    icon: MessageCircle,
    title: "Koordinasyon",
    body: "Gerekirse ileri görüntüleme veya ilgili branş konsültasyonları ile süreç kesintisiz yürütülür.",
  },
  {
    icon: HeartPulse,
    title: "Nefes ve ses konforu",
    body: "Burun solunumu, horlama, ses kullanımı ve kulak sağlığına yönelik koruyucu öneriler düzenli izlenir.",
  },
];

export function HomeWhyChoose() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
      {items.map(({ icon: Icon, title, body }) => (
        <Card
          key={title}
          className="border-[var(--border)]/80 bg-[var(--surface)]/90 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-soft-lg"
        >
          <CardContent className="flex gap-4 p-6 sm:p-7">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--primary-muted)] text-[var(--primary)] shadow-inner-soft">
              <Icon className="h-6 w-6" aria-hidden />
            </span>
            <div>
              <h3 className="font-serif text-lg font-medium text-[var(--foreground)]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]">{body}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
