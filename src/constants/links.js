import React from "react"
import { FaCcStripe, FaCreditCard, FaAlipay } from "react-icons/fa"
import { GrProjects, GrContact } from "react-icons/gr";
import { FcAbout } from "react-icons/fc";

export default [
  {
    page: "About",
    label: "About",
    url: `#abouts`,
    icon: <FcAbout className="icon" />,
  },
  {
    page: "Projects",
    label: "Projects",
    url: `#projects`,
    icon: <GrProjects className="icon" />,
  },
  {
    page: "Contact",
    label: "Contact",
    url: `#contact`,
    icon: <GrContact className="icon" />,
  },  
]
