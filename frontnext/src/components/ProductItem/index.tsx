import Image from "next/image";
import Link from "next/link";

import { ProductItemProps } from "../../@types";
import ProductPrice from "../ProductPrice";

import styles from "./productitem.module.css";

export default function ProductItem(product: ProductItemProps) {
  const { id, name, imgUrl, price } = product;
  return (
    <Link href={`/catalog/product/${id}`}>
      <a className={`card-base border-radius-10 ${styles.productCard}`}>
        <div className={styles.cardTopContainer}>
          <Image
            src={imgUrl}
            alt={name}
            className={styles.productCardImage}
            width={160}
            height={160}
          />
        </div>
        <div className={styles.cardBottomContainer}>
          <h6>{name}</h6>
          <ProductPrice price={String(price)} />
        </div>
      </a>
    </Link>
  );
}
