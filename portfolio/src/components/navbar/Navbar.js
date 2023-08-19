"use client";
import Link from "next/link";
import React from "react";
import style from "./navbar.module.css";
import { useState } from "react";

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
    url: "/services",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
];

function Navbar() {
  const [display, setDisplay] = useState(false);
  return (
    <div className={style.container}>
      <Link
        href="/"
        className={style.logo}
        style={{
          display: display ? "none" : "flex",
        }}
      >
        Ali Samadi
      </Link>
      <div className={style.links}>
        {links.map((link) => (
          <a className={style.link} key={link.id} href={link.url}>
            {link.title}
          </a>
        ))}
      </div>
      <div className={style.mobnav}>
        <div
          className="cursor-pointer text-3xl md:hidden bg-slate-100"
          onClick={() => setDisplay((prevDisplay) => !prevDisplay)}
        >
          &#9783;
        </div>
        <div
          className={style.mobile}
          style={{
            display: display ? "grid" : "none",
          }}
        >
          {links.map((link) => (
            <a key={link.id} href={link.url}>
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
