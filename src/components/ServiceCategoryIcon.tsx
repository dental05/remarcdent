import React from 'react';
import {
  Bone,
  Braces,
  ClipboardList,
  Crown,
  Drill,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  WandSparkles,
  Wrench,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ServiceCategoryId } from '@/data/services';

type LucideIcon = React.ComponentType<React.SVGProps<SVGSVGElement>>;

const iconMap: Record<ServiceCategoryId, LucideIcon> = {
  'Consultații': ClipboardList,
  'Profilaxie și igienizare': Sparkles,
  'Ortodonție și ortopedie dento-facială': Braces,
  'Protetică': Crown,
  'Implantologie': Bone,
  'Chirurgie orală': ShieldCheck,
  'Parodontologie': HeartPulse,
  'Endodonție': Drill,
  'Odontoterapie restauratoare': Wrench,
  'Estetică dentară': WandSparkles,
};

export const ServiceCategoryIcon = ({
  category,
  className,
}: {
  category: ServiceCategoryId;
  className?: string;
}) => {
  const Icon = iconMap[category] ?? Stethoscope;
  return <Icon className={cn('w-6 h-6', className)} />;
};

export const getServiceCategoryIcon = (category: ServiceCategoryId) => iconMap[category] ?? Stethoscope;
