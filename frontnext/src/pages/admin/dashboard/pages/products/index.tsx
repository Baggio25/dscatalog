import { ProductsResponse } from "../../../../../@types";
import { ProductRow } from "../../../../../components";

function Products({ products }: ProductsResponse) {
  return (
    <div>
      <div style={{width: "100%", padding: 40}}>
        {products.map((product) => (
          <ProductRow {...product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default Products;
