import Link from "next/link";
import React from "react";
import style from "./footer.module.css";
import Image from "next/image";

const links = [
  {
    id: 1,
    title: "Home",
    url: "#",
  },
  {
    id: 2,
    title: "About",
    url: "#about",
  },
  {
    id: 3,
    title: "Skills",
    url: "#skills",
  },
  {
    id: 4,
    title: "Services",
    url: "#services",
  },
];
function Footer() {
  return (
    <div className={style.container}>
      <div className={style.name}>Ali Samadi</div>
      <div className={style.links}>
        {links.map((link) => (
          <a key={link.id} href={link.url}>
            {link.title}
          </a>
        ))}
      </div>
      <section className={style.logo}>
        <i class="fa fa-instagram"></i>
        <i class="fa fa-github"></i>
        <i class="fa fa-twitter"></i>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </section>
      <p>@AliSamadi.alright</p>
    </div>
  );
}
export default Footer;
