const mapping: Record<string, string> = {
  companies: 'company',
  rentals: 'rental',
  'rental-prices': 'rental_price',
  tools: 'tool',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
