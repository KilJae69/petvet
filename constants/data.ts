import rabbitImg from "@/public/services/rabbit2-trans.png";
import parrotImg from "@/public/services/parrot.png";
import dogImg from "@/public/services/funny-dog.png";
import dog2Img from "@/public/services/dog-hunt.png";
import kittenImg from "@/public/services/ginger-kitten.png";
import catImg from "@/public/services/young-cat-kitten.png";
import puppyImg from "@/public/services/puppy-goldie-trans.png";



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
  title: "Consultation",
  imageSrc: rabbitImg,
  imageClasses: "bottom-[-35%] right-[-60%]",
  speechLabel: "Let's talk about my health, prevention is important!",
},
{
  title: "Vaccination",
  imageSrc: dogImg,
  imageClasses: "bottom-[-15%] right-[-10%] max-w-[70%]",
  speechLabel: "A little pinch for a big protection!",
},
{
  title: "Therapy",
  imageSrc: catImg,
  imageClasses: "-bottom-3/4 -right-1/2",
  speechLabel: "Relax, this will make me feel better.",
},
{
  title: "Ophthalmology",
  imageSrc: parrotImg,
  imageClasses: "right-[-55%] top-[-35%] -translate-y-5 translate-x-5 -rotate-90",
  speechLabel: "I see clearly now!!",
},
{
  title: "Neutering",
  imageSrc: dog2Img,
  imageClasses: "bottom-[-65%] right-[-55%]",
  speechLabel: "This will help me stay healthy!",
},
{
  title: "Surgery",
  imageSrc: kittenImg,
  imageClasses: "bottom-[-65%] right-[-55%]",
  speechLabel: "Don't worry, I'll be in good hands!",
},
{
  title: "Emergency",
  imageSrc: puppyImg,
  imageClasses: "bottom-[-45%] right-[-15%] max-w-[70%]",
  speechLabel: "I need help now!",  
}
  ] as const