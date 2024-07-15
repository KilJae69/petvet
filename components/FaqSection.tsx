import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/constants/data";

export default function FaqSection() {
  return (
    <section className="mt-10 pt-8 md:pt-16 lg:pt-24">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center  gap-4  ">
        <h2 className="text-clamp-lg font-semibold ">FAQ</h2>

        <Accordion
          type="single"
          className="flex w-full flex-col gap-4 lg:max-w-[60%]"
          collapsible
        >
          {faqData.map((faq) => (
            <AccordionItem
              className="rounded-3xl  bg-white p-2 md:px-6"
              key={faq.id}
              value={`item-${faq.id}`}
            >
              <AccordionTrigger className="text-clamp-xs w-full gap-2 font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
