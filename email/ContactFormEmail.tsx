import { ContactFormData } from "@/lib/types";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

export default function ContactFormEmail({
  message,
  senderEmail,
  subject,
  fullName,
  phone,
}: ContactFormData) {
  return (
    <Html>
      <Head />
      <Preview>Nova poruka od {fullName}</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className=" my-10 rounded-md bg-white px-10 py-4">
              <Heading className="font-semibold leading-tight">
                Primili ste sljedeću poruku:
              </Heading>
              <Text className="font-semibold text-primary">{subject}</Text>
              <Text className="">{message}</Text>
              <Hr />
              <Text>Email pošiljaoca: {senderEmail}</Text>
              <Hr />
              <Text>Kontakt broj pošiljaoca: {phone}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
