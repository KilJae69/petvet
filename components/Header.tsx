"use client";

import Link from "next/link";

import { useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";

import { navbarLinks } from "@/constants/data";

import PrimaryButton from "./shared/PrimaryButton";
import Logo from "./shared/Logo";
import MobileNavbarToggle from "./MobileNavbarToggle";
import { MotionHeader } from "./shared/framer";
import useSectionStore from "@/hooks/store/useSectionStore";

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  const pathname = usePathname();

  const {
    isHeroSectionVisible: heroInView,
    isSubHeaderVisible: subHeaderInView,
    setHeroSectionVisible,
    setSubHeaderVisible,
  } = useSectionStore((state) => state);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (
      ((heroInView || subHeaderInView) && latest > 0) ||
      (latest > previous! && latest > 0)
    ) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    // Reset state on path change
    setHeroSectionVisible(false);
    setSubHeaderVisible(false);
  }, [pathname, setHeroSectionVisible, setSubHeaderVisible]);

  return (
    <MotionHeader
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed inset-x-0 top-0 z-50 mx-auto h-header-height max-w-[1970px] rounded-3xl border border-white bg-white px-4 py-2.5 shadow-lg shadow-black/[0.03] md:px-8 lg:px-16`}
    >
      <div className="container flex size-full items-center justify-between">
        <Logo />
        <div className="flex items-center gap-5">
          <div className="block xl:hidden">
            <MobileNavbarToggle />
          </div>
          <nav className="mr-10 hidden xl:block">
            <ul
              className={`flex gap-5 font-semibold text-black xl:text-xl
              
              `}
            >
              {navbarLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li className="group relative" key={link.id}>
                    <Link className={`cursor-pointer`} href={link.href}>
                      {link.title}
                    </Link>
                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] w-0  bg-black transition-all duration-500 group-hover:w-full
                    ${isActive && "w-full "}
                    `}
                    />
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="hidden md:block">
            <PrimaryButton label="Contact us" />
          </div>
        </div>
      </div>
    </MotionHeader>
  );
}
