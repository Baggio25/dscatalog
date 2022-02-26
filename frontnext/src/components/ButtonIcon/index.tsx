import Image from "next/image";
import arrow from "../../../public/arrow.svg";

import { ButtonIconProps } from "../../@types";

import styles from "./buttonicon.module.css";

export default function ButtonIcon({ label, type, disabled }: ButtonIconProps) {
  return (
    <div className={`d-flex ${styles.buttonContainer}`}>
      <button
        disabled={disabled}
        className={`btn btn-primary ${styles.btnIcon}`}
        type={type}
      >
        <h5>{label}</h5>
      </button>
      <div className={styles.btnIconContent}>
        <Image src={arrow} alt="Arrow" />
      </div>
    </div>
  );
}
