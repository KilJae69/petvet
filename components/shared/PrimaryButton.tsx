import Link from "next/link";

type PrimarybuttonProps = {
  label: string;
};

export default function PrimaryButton({ label }: PrimarybuttonProps) {
  return (
    <Link
      href={"/contact"}
      className="max-w-fit cursor-pointer rounded-3xl border border-accent bg-accent px-6 py-2.5 text-lg text-white  shadow-md  outline-none transition-all duration-300 ease-in-out hover:scale-105  hover:bg-[#d22e2e] hover:shadow-lg focus:scale-105 focus:shadow-lg active:scale-100 active:shadow-md disabled:scale-100"
    >
      {label}
    </Link>
  );
}
