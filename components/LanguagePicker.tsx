"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { capitalize } from "@/lib/utils";

import { GlobeIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSelectedLayoutSegments } from "next/navigation";
import React from "react";

export const LanguagePicker: React.FC = () => {
  type Option = {
    country: string;
    code: string;
  };
  const pathname = usePathname();
  const urlSegments = useSelectedLayoutSegments();
  const t = useTranslations("Header")

  const options: Option[] = [
    { country: t("language-option-en"), code: "en" }, // Native name is the same
    { country: t("language-option-bs"), code: "bs" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="w-full">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="flex items-center gap-2 text-lg font-semibold text-primary"
        >
          <GlobeIcon className="size-8 " />
          <span className="hidden lg:block">{t("language-button")}</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="bg-white">
        {options.map((lang) => {
          return (
            <DropdownMenuItem key={lang.code} className="hover:bg-primary">
              <Link href={`/${lang.code}/${urlSegments.join("/")}`}>
                <button
                  lang={lang.code}
                  onMouseDown={(e) => {
                    e.preventDefault();
                  }}
                  className={` flex w-full items-center gap-2 px-4 py-2 text-left text-sm hover:text-white ${
                    pathname === `/${lang.code}` ? " text-primary" : ""
                  }`}
                >
                  <Image
                    width={20}
                    height={20}
                    src={`/icons/${lang.code}.svg`}
                    alt={`${lang.country} flag icon`}
                  />
                  {capitalize(lang.country)}
                </button>
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
