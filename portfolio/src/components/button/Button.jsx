import React from "react";
import style from "./button.module.css";
import Link from "next/link";

const Button = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className={style.container}>{text}</button>
    </Link>
  );
};

export default Button;
