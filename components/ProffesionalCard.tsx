import Image from "next/image";

type ProffesionalCardProps = {
  proffesional: typeof import("../constants/data").proffesionals[number];
};

export default function ProffesionalCard({
  proffesional,
}: ProffesionalCardProps) {
  return (
    <div className="flex cursor-grab flex-col gap-3">
      <div className="gradient-bg relative aspect-[300/400] rounded-3xl">
        <Image
          src={proffesional.imageSrc}
          fill
          className="object-cover"
          alt={proffesional.name}
          sizes="(min-width: 380px) 300px, calc(53.33vw + 108px)"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-semibold">{proffesional.name}</h3>
        <p>{proffesional.title}</p>
      </div>
    </div>
  );
}
