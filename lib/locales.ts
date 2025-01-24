export const locales = ["bs", "en","de"] as const;
export type Locale = (typeof locales)[number];