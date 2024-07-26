// #Animals images
import rabbitImg from "@/public/services/rabbit2-trans.png";
import parrotImg from "@/public/services/parrot.png";
import dogImg from "@/public/services/funny-dog.png";
import dog2Img from "@/public/services/dog-hunt.png";
import kittenImg from "@/public/services/ginger-kitten.png";
import catImg from "@/public/services/young-cat-kitten.png";
import puppyImg from "@/public/services/puppy-goldie-trans.png";

// #Services images
import generalImg from "@/public/services/close-up-veterinary-doctor-taking-care-pet_1.webp";
import labImg from "@/public/services/close-up-scientist-using-microscope_1.webp";
import surgeryImg from "@/public/services/close-up-hands-touching-dog.webp";
import reproductionImg from "@/public/services/sleepy-puppies-vet-s-couch_1.webp";
import otherImg from "@/public/services/shaving-process-small-dog-sits-table-dog-shaved-by-professional_1.webp";

// #Proffesionals images
import prof1Img from "@/public/proffesionals/proffesional1-edited.png";
import prof2Img from "@/public/proffesionals/proffesional2-edited.png";
import prof3Img from "@/public/proffesionals/proffesional3-edited.png";
import prof4Img from "@/public/proffesionals/proffesional4-edited.png";

// #Testimonials images

import testimonial1Img from "@/public/testimonials/azra.jpg";
import testimonial2Img from "@/public/testimonials/ljilja.jpg";
import testimonial3Img from "@/public/testimonials/saida.jpg";

// #Gallery images
import gallery1Img from "@/public/gallery/gallery1.webp";
import gallery2Img from "@/public/gallery/gallery2.webp";
import gallery3Img from "@/public/gallery/gallery3.webp";
import gallery4Img from "@/public/gallery/gallery4.webp";
import gallery5Img from "@/public/gallery/gallery5.webp";
import gallery6Img from "@/public/gallery/gallery6.webp";

import generalIcon from "@/public/icons/services-icons/first-aid-kit.svg";
import labIcon from "@/public/icons/services-icons/loupe.svg";
import surgeryIcon from "@/public/icons/services-icons/scalpel.svg";
import reproductionIcon from "@/public/icons/services-icons/stethoscope.svg";
import otherIcon from "@/public/icons/services-icons/veterinarian.svg";

export const navbarLinks = [
  {
    id: 1,
    title: "link-home",
    href: "/",
  },
  {
    id: 2,
    title: "link-about",
    href: "/about",
  },
  { id: 3, title: "link-services", href: "/services" },
] as const;

export const navbarMobileLinks = [
  {
    id: 1,
    title: "link-home",
    href: "/",
  },
  {
    id: 2,
    title: "link-about",
    href: "/about",
  },
  { id: 3, title: "link-services", href: "/services" },

  { id: 4, title: "contact-button", href: "/contact" },
] as const;

export const services = [
  {
    id: 1,
    title: "Consultation",
    imageSrc: rabbitImg,
    imageClasses:
      "absolute translate-x-5 translate-y-5 object-contain transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 bottom-[-35%] right-[-60%]",
    speechLabel: "Let's talk about my health, prevention is important!",
  },
  {
    id: 2,
    title: "Vaccination",
    imageSrc: dogImg,
    imageClasses:
      "absolute translate-x-5 translate-y-5 object-contain transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 bottom-[-15%] right-[-10%] max-w-[70%]",
    speechLabel: "A little pinch for a big protection!",
  },
  {
    id: 3,
    title: "Therapy",
    imageSrc: catImg,
    imageClasses:
      "absolute translate-x-5 translate-y-5 object-contain transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 -bottom-3/4 -right-1/2",
    speechLabel: "Relax, this will make me feel better.",
  },
  {
    id: 4,
    title: "Ophthalmology",
    imageSrc: parrotImg,
    imageClasses:
      "absolute object-contain transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 right-[-55%] top-[-35%] -translate-y-5 translate-x-5 -rotate-90",
    speechLabel: "I see clearly now!!",
  },
  {
    id: 5,
    title: "Neutering",
    imageSrc: dog2Img,
    imageClasses:
      "absolute translate-x-5 translate-y-5 object-contain transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 bottom-[-65%] right-[-55%]",
    speechLabel: "This will help me stay healthy!",
  },
  {
    id: 6,
    title: "Surgery",
    imageSrc: kittenImg,
    imageClasses:
      "absolute translate-x-5 translate-y-5 object-contain transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 bottom-[-65%] right-[-55%]",
    speechLabel: "Don't worry, I'll be in good hands!",
  },
  {
    id: 7,
    title: "Emergency",
    imageSrc: puppyImg,
    imageClasses:
      "absolute translate-x-5 translate-y-5 object-contain transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 bottom-[-45%] right-[-15%] max-w-[70%]",
    speechLabel: "I need help now!",
  },
] as const;

export const proffesionals = [
  {
    id: 1,
    name: "Emir Harbaš",
    title: "dr. vet. med.",
    imageSrc: prof1Img,
  },
  {
    id: 2,
    name: "Amra Fatić-Harbaš",
    title: "dr. vet. med.",
    imageSrc: prof2Img,
  },
  {
    id: 3,
    name: "Nermin Mahmutović",
    title: "vet. tehnician",
    imageSrc: prof3Img,
  },
  {
    id: 4,
    name: "Senad Hrkić",
    title: "vet. tehnician",
    imageSrc: prof4Img,
  },
] as const;

export const testimonials = [
  {
    id: 1,
    nameKey: "1.name",
    subtitleKey: "1.subtitle",
    textKey: "1.text",
    imageSrc: testimonial1Img,
  },
  {
    id: 2,
    nameKey: "2.name",
    subtitleKey: "2.subtitle",
    textKey: "2.text",
    imageSrc: testimonial2Img,
  },
  {
    id: 3,
    nameKey: "3.name",
    subtitleKey: "3.subtitle",
    textKey: "3.text",
    imageSrc: testimonial3Img,
  },
];

export const imageGallery = [
  { id: 1, imageSrc: gallery1Img, alt: "gallery1" },
  { id: 2, imageSrc: gallery2Img, alt: "gallery2" },
  { id: 3, imageSrc: gallery3Img, alt: "gallery3" },
  { id: 4, imageSrc: gallery4Img, alt: "gallery4" },
  { id: 5, imageSrc: gallery5Img, alt: "gallery5" },
  { id: 6, imageSrc: gallery6Img, alt: "gallery6" },
] as const;

export const faqData = [
  {
    id: 1,
    questionKey: "question1.question",
    answerKey:
      "question1.answer",
  },
  {
    id: 2,
    questionKey: "question2.question",
    answerKey:
      "question2.answer",
  },
  {
    id: 3,
    questionKey: "question3.question",
    answerKey:
      "question3.answer",
  },
  {
    id: 4,
    questionKey: "question4.question",
    answerKey:
      "question4.answer",
  },
  {
    id: 5,
    questionKey: "question5.question",
    answerKey:
      "question5.answer",
  },
] as const;

export const servicesNew = [
  {
    id: 1,
    titleKey: "GeneralCare.title",
    descriptionKey: "GeneralCare.description",
    href: "/services/general-care-and-treatment",
    slug: "general-care-and-treatment",
    icon: generalIcon,
    image: generalImg,
    imageAltKey: "GeneralCare.imageAlt",
    content: {
      aboutSectionKey: "GeneralCare.aboutSection",
      serviceIncluded: [
        {
          id: 1,
          titleKey: "GeneralCare.included.1.title",
          descriptionKey: "GeneralCare.included.1.description",
        },
        {
          id: 2,
          titleKey: "GeneralCare.included.2.title",
          descriptionKey: "GeneralCare.included.2.description",
        },
        {
          id: 3,
          titleKey: "GeneralCare.included.3.title",
          descriptionKey: "GeneralCare.included.3.description",
        },
        {
          id: 4,
          titleKey: "GeneralCare.included.4.title",
          descriptionKey: "GeneralCare.included.4.description",
        },
      ],
      whySectionKey: "GeneralCare.whySection",
    },
  },
  {
    id: 2,
    titleKey: "Laboratory.title",
    descriptionKey: "Laboratory.description",
    href: "/services/laboratory-diagnostics",
    slug: "laboratory-diagnostics",
    icon: labIcon,
    image: labImg,
    imageAltKey: "Laboratory.imageAlt",
    content: {
      aboutSectionKey: "Laboratory.aboutSection",
      serviceIncluded: [
        {
          id: 1,
          titleKey: "Laboratory.included.1.title",
          descriptionKey: "Laboratory.included.1.description",
        },
        {
          id: 2,
          titleKey: "Laboratory.included.2.title",
          descriptionKey: "Laboratory.included.2.description",
        },
        {
          id: 3,
          titleKey: "Laboratory.included.3.title",
          descriptionKey: "Laboratory.included.3.description",
        },
        {
          id: 4,
          titleKey: "Laboratory.included.4.title",
          descriptionKey: "Laboratory.included.4.description",
        },
      ],
      whySectionKey: "Laboratory.whySection",
    },
  },
  {
    id: 3,
    titleKey: "Surgery.title",
    descriptionKey: "Surgery.description",
    href: "/services/surgery",
    slug: "surgery",
    icon: surgeryIcon,
    image: surgeryImg,
    imageAltKey: "Surgery.imageAlt",
    content: {
      aboutSectionKey: "Surgery.aboutSection",
      serviceIncluded: [
        {
          id: 1,
          titleKey: "Surgery.included.1.title",
          descriptionKey: "Surgery.included.1.description",
        },
        {
          id: 2,
          titleKey: "Surgery.included.2.title",
          descriptionKey: "Surgery.included.2.description",
        },
        {
          id: 3,
          titleKey: "Surgery.included.3.title",
          descriptionKey: "Surgery.included.3.description",
        },
        {
          id: 4,
          titleKey: "Surgery.included.4.title",
          descriptionKey: "Surgery.included.4.description",
        },
        {
          id: 5,
          titleKey: "Surgery.included.5.title",
          descriptionKey: "Surgery.included.5.description",
        },
      ],
      whySectionKey: "Surgery.whySection",
    },
  },
  {
    id: 4,
    titleKey: "Reproduction.title",
    descriptionKey: "Reproduction.description",
    href: "/services/reproduction-and-obstetrics",
    slug: "reproduction-and-obstetrics",
    icon: reproductionIcon,
    image: reproductionImg,
    imageAltKey: "Reproduction.imageAlt",
    content: {
      aboutSectionKey: "Reproduction.aboutSection",
      serviceIncluded: [
        {
          id: 1,
          titleKey: "Reproduction.included.1.title",
          descriptionKey: "Reproduction.included.1.description",
        },
        {
          id: 2,
          titleKey: "Reproduction.included.2.title",
          descriptionKey: "Reproduction.included.2.description",
        },
        {
          id: 3,
          titleKey: "Reproduction.included.3.title",
          descriptionKey: "Reproduction.included.3.description",
        },
        {
          id: 4,
          titleKey: "Reproduction.included.4.title",
          descriptionKey: "Reproduction.included.4.description",
        },
      ],
      whySectionKey: "Reproduction.whySection",
    },
  },
  {
    id: 5,
    titleKey: "Other.title",
    descriptionKey: "Other.description",
    href: "/services/other-services",
    slug: "other-services",
    icon: otherIcon,
    image: otherImg,
    imageAltKey: "Other.imageAlt",
    content: {
      aboutSectionKey: "Other.aboutSection",
      serviceIncluded: [
        {
          id: 1,
          titleKey: "Other.included.1.title",
          descriptionKey: "Other.included.1.description",
        },
        {
          id: 2,
          titleKey: "Other.included.2.title",
          descriptionKey: "Other.included.2.description",
        },
        {
          id: 3,
          titleKey: "Other.included.3.title",
          descriptionKey: "Other.included.3.description",
        },
        {
          id: 4,
          titleKey: "Other.included.4.title",
          descriptionKey: "Other.included.4.description",
        },
      ],
      whySectionKey: "Other.whySection",
    },
  }
];



