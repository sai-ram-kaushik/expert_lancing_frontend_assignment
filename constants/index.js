import { MdSpatialTracking } from "react-icons/md";
import { SiEngadget } from "react-icons/si";
import { MdCenterFocusStrong } from "react-icons/md";
import { DiResponsive } from "react-icons/di";
import { BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
export const menuList = [
  { label: "Home", path: "/home" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Join Us", path: "/join-us" },
  { label: "Blogs", path: "/blogs" },
];

export const features = [
  {
    label: "Comprehensive Health Tracking",
    icon: <MdSpatialTracking size={90} />,
    desc: "The app offers a one-stop platform to seamlessly track various health data from connected smart gadgets, providing a holistic view of wellness metrics.",
  },
  {
    label: "Smart Gadget Integration",
    icon: <SiEngadget size={90} />,
    desc: "Users can connect their devices easily to the app, allowing for effortless synchronization of health-related information.",
  },
  {
    label: "Eco-Friendly Focus:",
    icon: <MdCenterFocusStrong size={90} />,
    desc: "Embracing an eco-conscious approach, the app reflects the company's commitment to sustainability by encouraging the use of all-natural, organically made products and minimizing the environmental impact of packaging materials.",
  },
  {
    label: "User-Friendly Interface:",
    icon: <DiResponsive size={90} />,
    desc: "The app balances modern functionality with a classic design, ensuring a user-friendly experience while tracking health data in a sustainable and stylish manner.",
  },
];

export const socials = [
    {
      label: "Instagram",
      icon: <BsInstagram size={20} />,
      key: "Instagram",
    },
    {
      label: "Facebook",
      icon: <FaFacebookF size={20} />,
      key: "facebook",
    },
    {
      label: "LinkedIn",
      icon: <AiFillLinkedin size={20} />,
      key: "LinkedIn",
    },
    {
      label: "Twitter",
      icon: <RiTwitterXFill size={20} />,
      key: "Twitter",
    },
  ];
