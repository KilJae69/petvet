import Image from "next/image";
import logoImg from "@/public/petvet-logo.png";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="relative block h-10 w-[200px]">
      <Image src={logoImg} alt="logo" fill className="object-cover" />
    </Link>
  );
}
