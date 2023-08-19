import Link from "next/link";
import React from "react";
import style from "./page.module.css";

function Skills() {
  return (
    <div className={style.container}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />
      <div className={style.head}>
        <h1 className="text-4xl font-bold">Skills</h1>
        <p>My Technical Level</p>
      </div>
      <div className={style.body}>
        <div>
          <p className={style.txt}>Web Desing</p>

          <div className={style.frontend}>
            <div className={style.unit}>
              <span class="material-symbols-outlined">verified</span>
              <p class="text-xl">Html</p>
            </div>
            <div className={style.unit}>
              <span class="material-symbols-outlined">verified</span>
              <p class="text-xl">Css</p>
            </div>
            <div className={style.unit}>
              <span class="material-symbols-outlined">verified</span>
              <p class="text-xl">React js</p>
            </div>
            <div className={style.unit}>
              <span class="material-symbols-outlined">verified</span>
              <p class="text-xl">Vue js</p>
            </div>
            <div className={style.unit}>
              <span class="material-symbols-outlined">verified</span>
              <p class="text-xl">Java script</p>
            </div>
            <div className={style.unit}>
              <span class="material-symbols-outlined">verified</span>
              <p class="text-xl">Type script</p>
            </div>
            <div className={style.unit}>
              <span class="material-symbols-outlined">verified</span>
              <p class="text-xl">Next js</p>
            </div>
            <div className={style.unit}>
              <span class="material-symbols-outlined">verified</span>
              <p class="text-xl">Nuxt js</p>
            </div>
          </div>
        </div>
        <div className={style.other}>
          <p>node</p>
        </div>
      </div>
    </div>
  );
}
export default Skills;
