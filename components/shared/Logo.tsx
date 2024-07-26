import Image from "next/image";
import logoImg from "@/public/petvet-logo.png";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="relative  block aspect-[100/20] h-7 max-w-[200px] sm:h-10"
    >
      <Image
        src={logoImg}
        alt="logo"
        fill
        className="object-contain"
        sizes="(min-width: 640px) 200px, 140px"
      />
    </Link>
  );
}
