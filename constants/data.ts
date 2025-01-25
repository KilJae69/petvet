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
import testimonial2Img from "@/public/testimonials/icon-user.svg";
// import testimonial3Img from "@/public/testimonials/icon-user.svg";

// #partner logos
import logoArche4Dogs from "@/public/logos-petvet/logo-arche4dogs.svg";
import logoBea from "@/public/logos-petvet/logo-bea.png";
import logoEinHertz from "@/public/logos-petvet/logo-ein-hertz.png";
// import logoEuropa from "@/public/logos-petvet/logo-europa.png"
import logoHundefreunde from "@/public/logos-petvet/logo-hundefreunde-europa.png";
import logoMaxFoundation from "@/public/logos-petvet/logo-max-foundation.svg";
import logoNiemeshund from "@/public/logos-petvet/logo-niemenshund.png";
import logoSelenhunde from "@/public/logos-petvet/logo-selenhunde.png";

// #Gallery images
import gallery1Img from "@/public/gallery/gallery1.jpg";
import gallery2Img from "@/public/gallery/gallery2.jpg";
import gallery3Img from "@/public/gallery/gallery3.jpg";
import gallery4Img from "@/public/gallery/gallery4.jpg";
import gallery5Img from "@/public/gallery/gallery5.jpg";
import gallery6Img from "@/public/gallery/gallery6.jpg";

import generalIcon from "@/public/icons/services-icons/first-aid-kit.svg";
import labIcon from "@/public/icons/services-icons/loupe.svg";
import surgeryIcon from "@/public/icons/services-icons/scalpel.svg";
import reproductionIcon from "@/public/icons/services-icons/stethoscope.svg";
import otherIcon from "@/public/icons/services-icons/veterinarian.svg";

import { FaShieldHeart, FaShieldDog, FaShieldCat } from "react-icons/fa6";

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

export const partners = [
  {
    id: 1,
    title: "Arche 4 Dogs",
    imgSrc: logoArche4Dogs,
    href: "https://www.arche4dogs.de/",
  },
  {
    id: 2,
    title: "BEA- Hilfe für Bosniens Strassenhunde e.V.",
    imgSrc: logoBea,
    href: "https://www.facebook.com/bea.hilfe.mit.herz/",
  },
  {
    id: 3,
    title: "Die Niemanshunde von Bihac",
    imgSrc: logoNiemeshund,
    href: "https://www.niemandshunde-bihac.de/",
  },
  {
    id: 4,
    title: "Ein Herz Fuer Hunde",
    imgSrc: logoEinHertz,
    href: "https://einherzfuerhunde.com/",
  },
  {
    id: 5,
    title: "Hunde Freunde Europa",
    imgSrc: logoHundefreunde,
    href: "https://www.hundefreunde-europa.de/ueberuns/",
  },
  {
    id: 6,
    title: "Max Foundation",
    imgSrc: logoMaxFoundation,
    href: "https://www.maxfoundation.de/homepage.html#:~:text=The%20Max%20Foundation%20is%20a,in%20Bihac%2C%20Bosnia%20and%20Herzegovina.",
  },
  {
    id: 7,
    title: "SeelenHunde",
    imgSrc: logoSelenhunde,
    href: "https://seelenhunde.at/",
  },
  // {id:8,
  //  title: "Max Foundation",
  //  imgSrc: logoMaxFoundation,
  //  href: "https://www.maxfoundation.de/homepage.html#:~:text=The%20Max%20Foundation%20is%20a,in%20Bihac%2C%20Bosnia%20and%20Herzegovina.",
  // },
];

export const aboutCards = [
  {
    id: 1,
    titleKey: "aboutCards.0.title",
    descriptionKey: "aboutCards.0.description",
    icon: FaShieldDog,
  },
  {
    id: 2,
    titleKey: "aboutCards.1.title",
    descriptionKey: "aboutCards.1.description",
    icon: FaShieldCat,
  },
  {
    id: 3,
    titleKey: "aboutCards.2.title",
    descriptionKey: "aboutCards.2.description",
    icon: FaShieldHeart,
  },
];

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
    imageSrc: testimonial2Img,
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
    answerKey: "question1.answer",
  },
  {
    id: 2,
    questionKey: "question2.question",
    answerKey: "question2.answer",
  },
  {
    id: 3,
    questionKey: "question3.question",
    answerKey: "question3.answer",
  },
  {
    id: 4,
    questionKey: "question4.question",
    answerKey: "question4.answer",
  },
  {
    id: 5,
    questionKey: "question5.question",
    answerKey: "question5.answer",
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
      ],
      whySectionKey: "Other.whySection",
    },
  },
];
