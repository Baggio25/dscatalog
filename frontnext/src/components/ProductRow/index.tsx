import { ProductItemProps } from "../../@types";

import styles from "./productrow.module.css";

export default function ProductRow(product: ProductItemProps) {
  return (
    <div>
      <p>{product.name}</p>
    </div>
  );
}
