import Image from "next/image";
import Link from "next/link";

import { ProductPrice } from "../../../components";

import arrow from "../../../../public/blue_arrow.svg";
import productImg from "../../../../public/product_big.png";
import styles from "../../../styles/pages/product.module.css";

export default function ProductDetails() {
  return (
    <div className={styles.productDetailsContainer}>
      <div
        className={`d-flex flex-column card-base border-radius-20 ${styles.productDetails}`}
      >
        <Link href="/catalog">
          <a className={styles.productDetailsGoback}>
            <Image src={arrow} alt="Voltar" />
            <h1 className={styles.textGoback}>voltar</h1>
          </a>
        </Link>
        <div className="row flex-column flex-lg-row align-items-center align-items-lg-start">
          <div className="col-xl-6">
            <div
              className={`text-center ${styles.productDetailsCard} ${styles.imgContainer}`}
            >
              <Image
                src={productImg}
                alt="Nome do produto"
                className={styles.productDetailsImage}
              />
            </div>
            <div className="d-md-flex justify-content-md-between flex-md-row flex-lg-column">
              <h1 className={styles.productDetailsName}>
                Computador Intel Core I7 2.4Ghtz
              </h1>
              <ProductPrice price="4999,90" />
            </div>
          </div>
          <div className={`col-xl-6 ${styles.productDetailsCard}`}>
            <h1 className={styles.productDescriptionTitle}>
              Descrição do produto
            </h1>
            <p className={styles.productDescriptionText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              dolor voluptates facere totam exercitationem officiis veniam
              tempora numquam doloribus? Quam fuga delectus ea consectetur
              reiciendis minus natus sunt. Doloribus error necessitatibus minus,
              eos, officia dicta eum culpa amet consequatur provident quasi
              distinctio nisi rem possimus laborum vero. Est, repudiandae
              inventore!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
