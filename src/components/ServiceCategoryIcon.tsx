import React from 'react';
import {
  AlarmClock,
  Baby,
  Bone,
  Braces,
  ClipboardList,
  Crown,
  Drill,
  HeartPulse,
  Layers,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Syringe,
  WandSparkles,
  Wrench,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ServiceCategoryId } from '@/data/services';

type LucideIcon = React.ComponentType<React.SVGProps<SVGSVGElement>>;

const iconMap: Record<ServiceCategoryId, LucideIcon> = {
  'Profilaxie și igienizare': Sparkles,
  'Ortodonție': Braces,
  'Implantologie și regenerare': Bone,
  'Chirurgie orală și BMF': ShieldCheck,
  'Protetică fixă': Crown,
  'Protetică mobilă': Layers,
  'Endodonție': Drill,
  'Estetică dentară': WandSparkles,
  'Parodontologie': HeartPulse,
  'Odontoterapie restauratoare': Wrench,
  'Consultații și diagnostic': ClipboardList,
  'Pedodonție': Baby,
  'Proceduri adjuvante': Syringe,
  'Urgențe stomatologice': AlarmClock,
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
