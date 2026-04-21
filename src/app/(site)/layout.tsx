import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { getDoctorProfile } from "@/lib/doctor";

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const doctor = await getDoctorProfile();
  const clinicName = doctor.fullName;

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)]">
      <SiteHeader clinicName={clinicName} />
      <main className="flex-1">{children}</main>
      <SiteFooter clinicName={clinicName} phone={doctor.phone} address={doctor.address} />
    </div>
  );
}
