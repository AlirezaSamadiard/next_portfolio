import Link from "next/link";
import React from "react";
import style from "./page.module.css";
import Button from "@/components/button/Button";

function Home() {
  return (
    <div className={style.container}>
      <div className={style.pic}>
        <img
          src="/2.png"
          alt="salam"
          width={250}
          height={250}
          className={style.img}
        />
      </div>
      <div className={style.title}>
        <h1 className="text-4xl font-bold ">Ali Samadi 🗿</h1>
        <div className={style.pa}>
          <p className="font-mono mb-4 text-3sm">Visual Designer 👨🏻‍💻 </p>
          <p className="mb-4 text-xl">I'm creative designer based in Tehran.</p>
          <p className="text-xl mb-4">
            I'm very passionative and dedicated to my work ...
          </p>
        </div>
        <Button url="/contact" text="Say Hello 📝" />
      </div>
      <section class="hidden lg:flex text-2xl flex-col align-middle gap-6  ">
        <i class="fa fa-instagram"></i>
        <i class="fa fa-github"></i>
        <i class="fa fa-twitter"></i>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </section>
    </div>
  );
}
export default Home;
