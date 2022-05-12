import { ProductItemProps } from "../../@types";
import ProductPrice from "../ProductPrice";

import styles from "./productrow.module.css";

export default function ProductRow(product: ProductItemProps) {
  return (
    <div
      className={`d-flex flex-column flex-md-row align-items-center p-4 ${styles.productRowContainer}`}
    >
      <div className={styles.imgContainer}>
        <img src={product.imgUrl} alt={product.name} />
      </div>
      <div className={styles.productRowDetails}>
        <h4>{product.name}</h4>
        <ProductPrice price={String(product.price)} />
        <div className={`d-flex flex-row ${styles.categories}`}>
          {product.categories.map((category) => (
            <div className={styles.category} key={category.id}>
              {category.name}
            </div>
          ))}
        </div>
      </div>
      <div
        className={`d-flex flex-row-reverse flex-md-column justify-content-around ${styles.buttonContainer}`}
      >
        <button type="button" className={styles.buttonEdit}>
          Editar
        </button>
        <button type="button" className={styles.buttonDelete}>
          Excluir
        </button>
      </div>
    </div>
  );
}
