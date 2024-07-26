import ServicesList from "@/components/shared/ServicesList";
import { useTranslations } from "next-intl";

import { PiBoneFill } from "react-icons/pi";

export default function ServicesPage() {
  const t = useTranslations('ServicesSection');
  return (
    <section>
      <div className=" gradient-bg relative mt-[calc(var(--header-height)+20px)] rounded-3xl px-5 py-8 text-center shadow-md  ">
        <h1 className="text-clamp-lg font-bold text-white">Services</h1>
      </div>
      <div className="mx-auto max-w-[1000px] space-y-6 p-5 py-14 text-center md:py-20 lg:py-32">
      <h2 className="flex items-center justify-center gap-2 font-semibold">
            <PiBoneFill className="size-6 text-primary" />
            <span className="block text-primary">PetVet</span> { t("h2")}
          </h2>
          <p className="text-clamp-lg font-bold">
          { t("leadTitle")} <span className="text-primary">PetVet</span>{" "}
            { t("h2")}
          </p>
          <p className="text-clamp-sm text-black/70">
          { t("description")}
          </p>
      </div>

      <div className="pb-14 md:pb-20 lg:pb-32">
        <ServicesList />
      </div>
    </section>
  );
}
