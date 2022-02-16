import Image from "next/image";
import Link from "next/link";

import { ProductPrice } from "../../../components";

import arrow from "../../../../public/blue-arrow.svg";
import productImg from "../../../../public/product-big.png";

import styles from "../../../styles/pages/product.module.css";

export default function ProductDetails() {
  return (
    <div className={styles.productDetailsContainer}>
      <div
        className={`d-flex flex-column card-base border-radius-20 
        ${styles.productDetails}`}
      >
        <Link href="/catalog">
          <a className={styles.productDetailsGoback}>
            <Image src={arrow} alt="Voltar" />
            <h1 className={styles.textGoback}>Voltar</h1>
          </a>
        </Link>

        <div
          className="row flex-column flex-lg-row align-items-center 
          align-items-lg-start"
        >
          <div className="col-xl-6">
            <div
              className={`text-center ${styles.productDetailsCard} 
                ${styles.imgContainer}`}
            >
              <Image
                src={productImg}
                alt="Nome do produto"
                className={styles.productDetailsImage}
              />
            </div>
            <div className="d-md-flex justify-content-md-between flex-md-row flex-lg-column">
              <h1 className={styles.productDetailsName}>
                Computador Intel Core i7
              </h1>
              <ProductPrice price="4799,90" />
            </div>
          </div>
          <div className={`col-xl-6 ${styles.productDetailsCard}`}>
            <h1 className={styles.productDescriptionTitle}>
              Descrição do Produto
            </h1>
            <p className={styles.productDescriptionText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, natus
              rem quos at itaque velit nam provident. Sapiente suscipit ad hic
              ipsam minima corrupti inventore, quaerat ab blanditiis
              perferendis. Molestiae nulla accusamus distinctio, quaerat natus
              corrupti debitis provident, eaque aut temporibus fugit culpa,
              optio dolores modi ratione hic earum nostrum!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
