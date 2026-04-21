import { getDoctorProfile } from "@/lib/doctor";

export async function LegalContactBlock() {
  const doctor = await getDoctorProfile();

  return (
    <aside className="my-10 rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)]/50 p-6 sm:p-8">
      <h2 className="font-serif text-lg font-semibold text-[var(--foreground)]">
        {"Veri sorumlusu"}
      </h2>
      <dl className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--muted-foreground)]">
        <div>
          <dt className="font-medium text-[var(--foreground)]">{"Unvan / ad soyad"}</dt>
          <dd>{doctor.fullName}</dd>
        </div>
        {doctor.address ? (
          <div>
            <dt className="font-medium text-[var(--foreground)]">{"Adres"}</dt>
            <dd>{doctor.address}</dd>
          </div>
        ) : null}
        {doctor.phone ? (
          <div>
            <dt className="font-medium text-[var(--foreground)]">{"Telefon"}</dt>
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
        {doctor.email ? (
          <div>
            <dt className="font-medium text-[var(--foreground)]">{"E-posta"}</dt>
            <dd>
              <a href={`mailto:${doctor.email}`} className="font-medium text-[var(--primary)] hover:underline">
                {doctor.email}
              </a>
            </dd>
          </div>
        ) : (
          <p className="text-xs text-[var(--muted-foreground)]">
            {
              "KVKK kapsam\u0131ndaki ba\u015fvurular\u0131n\u0131z\u0131 yukar\u0131daki adrese yaz\u0131l\u0131 olarak iletebilir veya telefon \u00fczerinden y\u00f6nlendirme talep edebilirsiniz."
            }
          </p>
        )}
      </dl>
    </aside>
  );
}
