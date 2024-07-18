import { proffesionals } from "@/constants/data";

import ProffesionalsSlider from "./ProffesionalsSlider";

export default function ProffesionalsSection() {
  return (
    <section className="mt-10 flex flex-col items-center gap-10 pt-8 md:pt-16 lg:gap-20 lg:pt-24">
      <h2 className="text-clamp-lg font-semibold ">Our Proffesionals</h2>

      <div className=" w-full  max-w-[1280px]">
        <ProffesionalsSlider slides={proffesionals} />
      </div>
    </section>
  );
}
