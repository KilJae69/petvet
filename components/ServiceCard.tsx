import Image, { StaticImageData } from "next/image";
import SpeechBubble from "./shared/SpeechBubble";

type ServiceCardProps = {
  title: string;
  imageSrc: StaticImageData;
  imageClasses: string;
  speechLabel: string;
};

export default function ServiceCard({
  title,
  imageSrc,
  imageClasses,
  speechLabel,
}: ServiceCardProps) {
  return (
    <div className="group relative aspect-square size-full max-w-[300px] cursor-pointer overflow-hidden rounded-3xl bg-slate-300 p-5 shadow-lg xl:max-w-[400px]">
      <div className="absolute inset-0 z-10 bg-primary/20 transition-colors duration-500 group-hover:bg-primary/0" />
      <h3 className="text-clamp-sm font-semibold ">{title}</h3>
      <Image
        src={imageSrc}
        alt="services"
        className={`absolute  translate-x-5 translate-y-5 object-contain transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 ${
          title === "Vaccination"
            ? "right-[-10%] top-[30%] max-w-[70%] "
            : "right-[-45%] top-[35%]"
        }`}
      />

      <SpeechBubble label={speechLabel} />
    </div>
  );
}
