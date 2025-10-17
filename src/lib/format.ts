import type { Currency, ServicePrice } from '@/data/services';

const formatNumeric = (value: number, currency: Currency) => {
  if (currency === 'RON') {
    return value.toLocaleString('ro-RO');
  }
  return value.toLocaleString('ro-RO', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
};

export const formatPrice = (price: ServicePrice) => {
  if (price.type === 'range') {
    const suffix = price.currency === 'RON' ? ' lei' : ' €';
    return `${formatNumeric(price.min, price.currency)} - ${formatNumeric(price.max, price.currency)}${suffix}`;
  }

  if (price.currency === 'RON') {
    return `${formatNumeric(price.amount, price.currency)} lei`;
  }

  return `${formatNumeric(price.amount, price.currency)} €`;
};
