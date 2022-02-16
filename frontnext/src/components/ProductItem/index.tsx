import Link from "next/link";
import Image from "next/image";

import ProductPrice from "../ProductPrice";
import styles from "./productitem.module.css";
import productImg from "../../../public/product.png";

export default function ProductItem() {
  return (
    <Link href="/catalog/product/1">
      <a className={`card-base border-radius-10 ${styles.productCard}`}>
        <div className={styles.cardTopContainer}>
          <Image
            src={productImg}
            alt="Nome do produto"
            className={styles.productCardImage}
          />
        </div>
        <div className={styles.cardBottomContainer}>
          <h6>Nome do produto</h6>
          <ProductPrice price="1999,90" />
        </div>
      </a>
    </Link>
  );
}
