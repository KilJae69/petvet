// #Animals images
import rabbitImg from "@/public/services/rabbit2-trans.png";
import parrotImg from "@/public/services/parrot.png";
import dogImg from "@/public/services/funny-dog.png";
import dog2Img from "@/public/services/dog-hunt.png";
import kittenImg from "@/public/services/ginger-kitten.png";
import catImg from "@/public/services/young-cat-kitten.png";
import puppyImg from "@/public/services/puppy-goldie-trans.png";

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

export const navbarLinks = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "About",
    href: "/about",
  },
  { id: 3, title: "Resources", href: "/resources" },
  { id: 4, title: "Blog", href: "/blog" },
] as const;

export const navbarMobileLinks = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "About",
    href: "/about",
  },
  { id: 3, title: "Resources", href: "/resources" },
  { id: 4, title: "Blog", href: "/blog" },
  { id: 5, title: "Contact Us", href: "/contact" },
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
    name: "Dr. Jane Doe",
    title: "Veterinarian",
    imageSrc: prof1Img,
  },
  {
    id: 2,
    name: "Dr. Jane Doe",
    title: "Veterinarian",
    imageSrc: prof2Img,
  },
  {
    id: 3,
    name: "Dr. Mark Doe",
    title: "Veterinarian",
    imageSrc: prof3Img,
  },
  {
    id: 4,
    name: "Dr. John Doe",
    title: "Veterinarian",
    imageSrc: prof4Img,
  },
  {
    id: 5,
    name: "Dr. John Doe",
    title: "Veterinarian",
    imageSrc: prof2Img,
  },
  {
    id: 6,
    name: "Dr. John Doe",
    title: "Veterinarian",
    imageSrc: prof1Img,
  },
] as const;

export const testimonials = [
  {
    id: 1,
    name: "Azra Toromanović",
    subtitle: "Owner of the cat Mili",
    imageSrc: testimonial1Img,
    text: "I am very satisfied with the service I received. The staff is very professional and friendly. I would recommend this clinic to everyone.",
  },
  {
    id: 2,
    name: "Ljilja Doe",
    subtitle: "Owner of the dog Max",
    imageSrc: testimonial2Img,
    text: "I am very satisfied with the service I received. The staff is very professional and friendly. I would recommend this clinic to everyone.",
  },
  {
    id: 3,
    name: "Michael Doe",
    subtitle: "Owner of the dog Max",
    imageSrc: testimonial3Img,
    text: "I am very satisfied with the service I received. The staff is very professional and friendly. I would recommend this clinic to everyone.",
  },
] as const;

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
    question: "What is the best food for my pet?",
    answer:
      "The best food for your pet is the one that is balanced and provides all the necessary nutrients. It is important to consult with your veterinarian to determine the best diet for your pet.",
  },
  {
    id: 2,
    question: "How often should I take my pet to the vet?",
    answer:
      "It is recommended to take your pet to the vet at least once a year for a check-up. However, if your pet is sick or has any health issues, you should take them to the vet as soon as possible.",
  },
  {
    id: 3,
    question: "How can I keep my pet healthy?",
    answer:
      "To keep your pet healthy, you should provide them with a balanced diet, regular exercise, and plenty of fresh water. It is also important to take your pet to the vet for regular check-ups and vaccinations.",
  },
  {
    id: 4,
    question: "What should I do if my pet is sick?",
    answer:
      "If your pet is sick, you should take them to the vet as soon as possible. It is important to consult with your veterinarian to determine the best course of action for your pet's health.",
  },
  {
    id: 5,
    question: "How can I prevent my pet from getting sick?",
    answer:
      "To prevent your pet from getting sick, you should provide them with a balanced diet, regular exercise, and plenty of fresh water. It is also important to keep your pet up to date on their vaccinations and take them to the vet for regular check-ups.",
  },
] as const;
