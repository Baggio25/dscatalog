import './styles.css';

import ProductPrice from 'components/ProductPrice';
import { Product } from 'types/product';
import CategoryBadge from '../CategoryBadge';

import CameraImg from '../../../../assets/images/camera.png';

type Props = {
  product: Product;
};

const ProductCrudCard = ({ product }: Props) => {
  return (
    <div className="base-card product-crud-card">
      <div className="product-crud-card-top-container">
        {product.imgUrl === '' || product.imgUrl === null ? (
          <img src={CameraImg} alt={product.name} />
        ) : (
          <img src={product.imgUrl} alt={product.name} />
        )}
      </div>
      <div className="product-crud-card-description-container">
        <div className="product-crud-card-bottom-container">
          <h6>{product.name}</h6>
          <ProductPrice price={product.price} />
        </div>
        <div className="product-crud-categories-container">
          {product.categories.map((category) => (
            <CategoryBadge name={category.name} key={category.id} />
          ))}
        </div>
      </div>
      <div className="product-crud-buttons-container">
        <button className="btn btn-outline-danger product-crud-card-button product-crud-card-button-first">
          Cancelar
        </button>
        <button className="btn btn-outline-secondary product-crud-card-button">
          Editar
        </button>
      </div>
    </div>
  );
};

export default ProductCrudCard;
