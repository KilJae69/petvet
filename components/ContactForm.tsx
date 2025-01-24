"use client";

import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { HiOutlineEnvelope, HiOutlineUser } from "react-icons/hi2";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineSubtitles } from "react-icons/md";
import { GiPencil } from "react-icons/gi";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FaPaperPlane } from "react-icons/fa6";
import { TContactFormSchema, contactFormSchema } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { sendEmailAction } from "@/lib/sendEmail.action";
import toast from "react-hot-toast";

type ContactFormProps = {
  className?: string;
};

export default function ContactForm({ className }: ContactFormProps) {
  const t = useTranslations("ContactForm");
  const form = useForm<TContactFormSchema>({
    resolver: zodResolver(contactFormSchema(t)),
    defaultValues: {
      fullName: "",

      senderEmail: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const {
    formState: { errors, isSubmitting },
    reset,
  } = form;

  const onSubmit = async (formData: TContactFormSchema) => {
    try {
      const response = await sendEmailAction(formData);

      if (response.error) {
        toast.error(`${t("errorMessage")}:${response.error}`);
      } else {
        toast.success(`${t("successMessage")}`);
        reset();
      }
    } catch (error) {
      toast.error(`Unexpected error: ${error} `);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("bg-white p-5 rounded-3xl  ", className)}
      >
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem className="group flex min-h-[80px] flex-col">
              <div
                className={`relative flex items-center border-b ${
                  errors.fullName ? "border-rose-600" : "border-gray-300"
                }`}
              >
                <FormLabel>
                  <HiOutlineUser className="size-6  font-thin text-black/40 " />
                </FormLabel>
                <FormControl>
                  <Input
                    className="text-sm"
                    placeholder={t("name")}
                    {...field}
                  />
                </FormControl>
                <span
                  className={`${
                    errors.fullName
                      ? "hidden"
                      : "absolute bottom-[-0.5px] left-0 h-px w-0 bg-primary transition-all duration-500 group-focus-within:w-full group-hover:w-full"
                  } `}
                ></span>
              </div>
              <FormMessage className="font-light text-rose-600" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="senderEmail"
          render={({ field }) => (
            <FormItem className="group flex min-h-[80px] flex-col">
              <div
                className={`relative flex items-center border-b ${
                  errors.senderEmail ? "border-rose-600" : "border-gray-300"
                }`}
              >
                <FormLabel>
                  <HiOutlineEnvelope className="size-6 font-thin text-black/40" />
                </FormLabel>
                <FormControl>
                  <Input
                    className="text-sm"
                    placeholder="example@outlook.com"
                    {...field}
                  />
                </FormControl>
                <span
                  className={`${
                    errors.senderEmail
                      ? "hidden"
                      : "absolute bottom-[-0.5px] left-0 h-px w-0 bg-primary transition-all duration-500 group-focus-within:w-full group-hover:w-full"
                  } `}
                ></span>
              </div>
              <FormMessage className="font-light text-rose-600" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="group flex min-h-[80px] flex-col">
              <div
                className={`relative flex items-center border-b ${
                  errors.phone ? "border-rose-600" : "border-gray-300"
                }`}
              >
                <FormLabel>
                  <FiPhoneCall className="size-6 font-thin text-black/40" />
                </FormLabel>
                <FormControl>
                  <Input
                    className="text-sm"
                    placeholder="+387 61 111 111"
                    {...field}
                  />
                </FormControl>
                <span
                  className={`${
                    errors.phone
                      ? "hidden"
                      : "absolute bottom-[-0.5px] left-0 h-px w-0 bg-primary transition-all duration-500 group-focus-within:w-full group-hover:w-full"
                  } `}
                ></span>
              </div>
              <FormMessage className="font-light text-rose-600" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem className="group flex min-h-[80px] flex-col">
              <div
                className={`relative flex items-center border-b ${
                  errors.subject ? "border-rose-600" : "border-gray-300"
                }`}
              >
                <FormLabel>
                  <MdOutlineSubtitles className="size-6 font-thin text-black/30" />
                </FormLabel>
                <FormControl>
                  <Input
                    className="text-sm"
                    placeholder={t("subject")}
                    {...field}
                  />
                </FormControl>
                <span
                  className={`${
                    errors.subject
                      ? "hidden"
                      : "absolute bottom-[-0.5px] left-0 h-px w-0 bg-primary transition-all duration-500 group-focus-within:w-full group-hover:w-full"
                  } `}
                ></span>
              </div>
              <FormMessage className="font-light text-rose-600" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="group flex min-h-[80px] flex-col">
              <div
                className={`relative flex items-center border-b ${
                  errors.message ? "border-rose-600" : "border-gray-300"
                }`}
              >
                <FormLabel>
                  <GiPencil className="size-6 font-thin text-black/40" />
                </FormLabel>
                <FormControl>
                  <Textarea
                    className="text-sm"
                    placeholder={t("text-area")}
                    {...field}
                  />
                </FormControl>
                <span
                  className={`${
                    errors.message
                      ? "hidden"
                      : "absolute bottom-[-0.5px] left-0 h-px w-0 bg-primary transition-all duration-500 group-focus-within:w-full group-hover:w-full"
                  } `}
                ></span>
              </div>
              <FormMessage className="font-light text-rose-600" />
            </FormItem>
          )}
        />

        <Button
          disabled={isSubmitting}
          type="submit"
          className="group relative mt-10 flex min-h-14 max-w-[200px] items-center justify-center gap-2 rounded-none bg-accent px-5 uppercase text-white transition-all "
        >
          <FaPaperPlane className="size-3 text-white" />
          {t("button")}
        </Button>
      </form>
    </Form>
  );
}
