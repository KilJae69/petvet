"use client";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Locale } from "@/lib/locales";
import { GlobeIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export const LanguagePicker: React.FC = () => {
  const router = useRouter();

  function handleLocaleChange(newLocale: Locale): void {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;

    const currentPath = window.location.pathname;
    const newPath = `/${newLocale}${currentPath.replace(/^\/(en|bs)/, '')}`;

    router.push(newPath);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button type="button" variant="ghost" size="icon">
          <GlobeIcon className="size-5" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Language</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuCheckboxItem
          checked={document.cookie.includes("NEXT_LOCALE=en")}
          onClick={() => {
            handleLocaleChange("en");
          }}
        >
          English
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={document.cookie.includes("NEXT_LOCALE=bs")}
          onClick={() => {
            handleLocaleChange("bs");
          }}
        >
          Bosnian
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
