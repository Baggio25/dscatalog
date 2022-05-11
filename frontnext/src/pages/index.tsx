/* eslint-disable @next/next/link-passhref */
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import { ButtonIcon } from "../components";

import homeImage from "../../public/homeimage.svg";
import styles from "../styles/pages/home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.homeContainer}>
      <div
        className={`row d-flex flex-column-reverse align-items-center 
        justify-content-center flex-lg-row ${styles.homeContent}`}
      >
        <div
          className={`col-lg-6 d-flex flex-column align-items-center 
          mt-4 mt-md-0 ${styles.homeText}`}
        >
          <h1 className={styles.textTitle}>
            Conheça o melhor catálogo de produtos
          </h1>

          <p className={styles.textSubtitle}>
            Ajudaremos você a encontrar os melhores produtos disponíveis no
            mercado.
          </p>

          <Link href="/catalog">
            <a>
              <ButtonIcon label="Inicie agora a sua busca" type="button" />
            </a>
          </Link>
        </div>

        <div
          className={`col-lg-6 d-flex align-items-center 
          justify-content-center align-items-lg-center 
          justify-content-lg-start ${styles.homeImgContainer}`}
        >
          <Image src={homeImage} alt="HomePage Image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
