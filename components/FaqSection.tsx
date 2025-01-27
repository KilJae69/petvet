import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/constants/data";
import { useTranslations } from "next-intl";
import { FadeIn, FadeInStagger } from "./FadeIn";

export default function FaqSection() {
  const t = useTranslations("FAQSection");
  return (
    <section className="mt-10 pt-8 md:pt-16 lg:pt-24">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center  gap-4  ">
        <FadeIn>
          <h2 className="text-clamp-lg font-semibold ">{t("heading")}</h2>
        </FadeIn>

        <FadeInStagger className=" min-h-[550px] w-full md:min-h-[600px] lg:max-w-[60%]">
          <Accordion type="single" className="flex flex-col gap-4" collapsible>
            {faqData.map((faq) => (
              <FadeIn
                className="rounded-3xl  bg-white p-2 md:px-6"
                key={faq.id}
              >
                <AccordionItem className="w-full" value={`item-${faq.id}`}>
                  <AccordionTrigger className="text-clamp-xs w-full gap-2 font-semibold">
                    {t(faq.questionKey)}
                  </AccordionTrigger>
                  <AccordionContent>{t(faq.answerKey)}</AccordionContent>
                </AccordionItem>
              </FadeIn>
            ))}
          </Accordion>
        </FadeInStagger>
      </div>
    </section>
  );
}
