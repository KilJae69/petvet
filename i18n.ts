import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import { locales } from './lib/locales';
 
// Can be imported from a shared config

 
export default getRequestConfig(async ({locale}) => {
  const baseLocale = new Intl.Locale(locale).baseName;
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(baseLocale as any)) notFound();
 
  return {
    messages: (await import(`./messages/${baseLocale}.json`)).default
  };
});