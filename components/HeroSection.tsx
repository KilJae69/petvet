import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="container relative flex flex-col rounded-3xl bg-[#7985D4]  px-5 pt-8 md:flex-row">
      <div className="flex flex-col gap-5  md:max-w-[60%]">
        <h1 className="text-clamp-lg font-bold text-white">
          <span className="text-[#D2412E]">PetVet</span>, your friendly
          neighbourhood veterinarian
        </h1>
        <p className="text-clamp-xs text-white">
          We prioritize your pet&apos;s health with love and expertise. Join us
          on a journey of care where your pet takes center stage.
        </p>
      </div>

      <div className="relative aspect-square w-full max-w-[700px] translate-y-20 ">
        <Image
          src={"/dog-icon2-removebg.png"}
          alt="dog image"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute size-full overflow-hidden">
        <div className="absolute -bottom-24 left-0 hidden size-[500px]  md:block">
          <Image
            src="/dog-paw.svg"
            alt="hero image"
            fill
            className=" object-cover opacity-30"
          />
        </div>
      </div>
    </section>
  );
}
