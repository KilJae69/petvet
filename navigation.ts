"use client";
import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from "next-intl/navigation";
import { locales } from "./lib/locales";

export const localePrefix = "always";

export const pathnames = {
  "/": "/",
  "/about": "/about",
  "/services": "/services",
  "/services/[slug]": "/services/[slug]",
  "/contact": "/contact",
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });

  export type PathnameKeys = keyof typeof pathnames;