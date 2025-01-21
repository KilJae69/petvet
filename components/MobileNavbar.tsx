"use client";
import {  navbarMobileLinks } from "@/constants/data";


import { FaArrowRightLong } from "react-icons/fa6";

import { Separator } from "./ui/separator";
import useNavbarStore from "@/hooks/store/useNavbarStore";

import Logo from "./shared/Logo";
import MobileNavbarToggle from "./MobileNavbarToggle";
import SocialLinks from "./shared/SocialLinks";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";


export default function MobileNavbar() {
  const { isNavbarOpen, toggleNavbar } = useNavbarStore();
  const t = useTranslations("Header")
  return (
    <div
      className={`fixed inset-0 z-50 h-screen bg-black px-5 transition-all duration-500
    ${
      isNavbarOpen
        ? "translate-y-0 opacity-100"
        : "pointer-events-none -translate-y-full opacity-0"
    }
    `}
    >
      <div
        className={`flex items-center justify-between py-8 transition-opacity delay-500 duration-500
        ${isNavbarOpen ? "opacity-100" : "pointer-events-none opacity-0"}
        `}
      >
        <Logo />
        <MobileNavbarToggle close />
      </div>
      <nav className="mt-16">
        <ul className="flex flex-col gap-4 border-b-white text-2xl font-semibold text-[#ccd1d9]">
          {navbarMobileLinks.map((link) => (
            <li
              onClick={toggleNavbar}
              className="group flex items-center gap-5"
              key={link.id}
            >
              <Link
                className="transition-colors group-hover:text-white"
                href={link.href}
              >
                {t(link.title)}
              </Link>
              <FaArrowRightLong className="text-sm transition-all group-hover:translate-x-2 group-hover:text-white" />
            </li>
          ))}
        </ul>
      </nav>
      <Separator className="mt-10 h-px bg-[#b7b9bd]/40" />
      <div className="mt-6">
        <SocialLinks />
      </div>
    </div>
  );
}