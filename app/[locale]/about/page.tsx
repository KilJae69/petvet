import { PiBoneFill } from "react-icons/pi";

export default function AboutPage() {
  return (
    <section>
       <div className=" gradient-bg relative mt-[calc(var(--header-height)+20px)] rounded-3xl px-5 py-8 text-center shadow-md  ">
        <h1 className="text-clamp-lg font-bold text-white">About us</h1>
      </div>
       <div className="mx-auto max-w-[1000px] space-y-6 p-5 py-14 text-center md:py-20 lg:py-32">
      <h2 className="flex items-center justify-center gap-2 font-semibold">
            <PiBoneFill className="size-6 text-primary" />
            <span className="block text-primary">PetVet</span> About us
          </h2>
          <p className="text-clamp-lg font-bold">
          Comprehensive Pet Vet Solutions For Peace Of Mind
          </p>
          <p className="text-clamp-sm text-black/70">
          At PetVet, we are dedicated to providing the highest standard of care for your beloved pets. Our team of experienced veterinarians, skilled groomers, and compassionate pet care specialists.
          </p>
      </div>
    </section>
  );
  
}