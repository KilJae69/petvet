"use client";

import { Link } from "@/i18n/routing";


type PrimarybuttonProps = {
  label: string;
  href?: string;
  
};

export default function PrimaryButton({ label,href }: PrimarybuttonProps) {

  const route = href === "/services" ? "/services" : "/contact";  

  return (
    <Link
      href={route}
      className="max-w-fit cursor-pointer whitespace-nowrap rounded-3xl border border-accent bg-accent px-6 py-2.5 text-lg text-white  shadow-md  outline-none transition-all duration-300 ease-in-out hover:scale-105  hover:bg-[#d22e2e] hover:shadow-lg focus:scale-105 focus:shadow-lg active:scale-100 active:shadow-md disabled:scale-100"
    >
      {label}
    </Link>
  );
}
