import Image from "next/image";

import { ButtonIconProps } from "../../@types";

import arrow from "../../../public/arrow.svg";
import styles from "./buttonicon.module.css";

export default function ButtonIcon({ label, type, disabled }: ButtonIconProps) {
  return (
    <div className={`d-flex ${styles.buttonContainer}`}>
      <button
        className={`btn btn-primary ${styles.buttonIcon}`}
        type={type}
        disabled={disabled}
      >
        <h5>{label}</h5>
      </button>
      <div className={styles.buttonIconContent} >
        <Image src={arrow} alt="arrow" />
      </div>
    </div>
  );
}
