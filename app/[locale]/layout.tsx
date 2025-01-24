import { Poppins } from "next/font/google";
import "./globals.css";
import React from "react";
import  { Toaster } from 'react-hot-toast';
import {
  getMessages,
  getTranslations,
  setRequestLocale,

  
} from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNavbar from "@/components/MobileNavbar";
import { Locale, locales } from "@/lib/locales";
import { Metadata } from "next";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

const poppins = Poppins({
  weight: ["100", "200", "400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // params is now a Promise
};
export async function generateMetadata({
  params,
}: {params: Promise<{ locale: string }>}): Promise<Metadata> {
  const { locale } = await params; 

   // Validate the locale
   if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }
  
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("titleHome"),
    description: t("descriptionHome"),
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }
   // Enable static rendering
   setRequestLocale(locale);
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`relative ${poppins.className} bg-slate-100`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <MobileNavbar />
          <main className="container">{children}</main>
          <Footer />
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
