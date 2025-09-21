import type { Currency } from '@/data/services';

export const formatPrice = (value: number, currency: Currency) => {
  if (currency === 'RON') {
    return `${value.toLocaleString('ro-RO')} lei`;
  }
  return `${value.toLocaleString('ro-RO', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} €`;
};
