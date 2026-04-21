import {
  Activity,
  HeartPulse,
  Plane,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  "heart-pulse": HeartPulse,
  activity: Activity,
  stethoscope: Stethoscope,
  plane: Plane,
};

export function ServiceIcon({ iconKey, className }: { iconKey: string | null; className?: string }) {
  const Icon = (iconKey && map[iconKey]) || Stethoscope;
  return <Icon className={className} aria-hidden />;
}
