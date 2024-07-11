type SpeechBubbleProps = {
  label: string;
};

export default function SpeechBubble({ label }: SpeechBubbleProps) {
  return (
    <div className="gradient-bg relative top-4 w-1/2 scale-0 rounded-full p-5 text-center shadow-xl transition-transform duration-300 group-hover:animate-scaleIn">
      <p className="text-clamp-2xs  font-semibold text-white">{label}</p>

      <div className="gradient-bg absolute -bottom-3 left-12 size-6 scale-0 rounded-full transition-transform delay-500  group-hover:animate-scaleIn">
        <div className="gradient-bg absolute left-4 top-5 size-4 scale-0 rounded-full transition-transform delay-300  group-hover:animate-scaleIn">
          <div className="gradient-bg absolute left-4 top-2 size-2 scale-0 rounded-full transition-transform  group-hover:animate-scaleIn" />
        </div>
      </div>
    </div>
  );
}
