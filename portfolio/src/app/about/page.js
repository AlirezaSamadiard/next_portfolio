import Link from "next/link";
import React from "react";
import style from "./page.module.css";

function About() {
  return (
    <div className={style.container}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />
      <div className={style.tit}>
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className={style.para}>My Introduction</p>
      </div>
      <div className={style.content}>
        <div className={style.pic}>
          <img
            src="/2.png"
            alt="salam"
            width={150}
            height={150}
            className={style.img}
          />
        </div>
        <div className={style.other}>
          <div className={style.logos}>
            <div className={style.di}>
              <span class="material-symbols-outlined">military_tech</span>
              <p>Experience</p>
              <p className="text-gray-400">1 year</p>
            </div>
            <div className={style.di}>
              <span class="material-symbols-outlined">business_center</span>
              <p>Complete</p>
              <p className="text-gray-400">7 project</p>
            </div>
            <div className={style.di}>
              <span class="material-symbols-outlined">support_agent</span>
              <p>Support</p>
              <p className="text-gray-400">24/7</p>
            </div>
          </div>
          <div className={style.txt}>
            <p className="mb-2 mt-2">
              Frontend developer, I create web pages with UI / UX user
              interface,
            </p>
            <p className="mb-2 mt-2">
              I have years of experience and many clients are happy with the
              projects carried out.
            </p>
          </div>
          <div className={style.butt}>
            <button>Download CV &#9783;</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
