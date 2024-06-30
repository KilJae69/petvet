import {  Poppins } from "next/font/google";
import "./globals.css";
import React from "react";
import { getMessages, getTranslations } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { locales } from "@/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const poppins = Poppins({
  weight: ["100", "200", "400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: { locale: "en" | "bs" };
};
export async function generateMetadata({
  params: { locale },
}: LocaleLayoutProps) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Readonly<LocaleLayoutProps>) {
  const messages = await getMessages();
  console.log(locale);
  return (
    <html lang={locale}>
      <body className={`${poppins.className} bg-slate-100`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
