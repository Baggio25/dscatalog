import Image from "next/image";
import Link from "next/link";

import productImage from "../../../public/product.png";
import { ProductItemProps } from "../../@types";
import ProductPrice from "../ProductPrice";

import styles from "./productitem.module.css";

export default function ProductItem(product: ProductItemProps) {
  return (
    <Link href="/catalog/product/1">
      <a className={`card-base border-radius-10 ${styles.productCard}`}>
        <div className={styles.cardTopContainer}>
          <Image
            src={productImage}
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
