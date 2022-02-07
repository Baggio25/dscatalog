import { AxiosRequestConfig } from 'axios';
import { Link } from 'react-router-dom';

import ProductPrice from 'components/ProductPrice';
import { Product } from 'types/product';
import CategoryBadge from '../CategoryBadge';

import CameraImg from '../../../../assets/images/camera.png';

import './styles.css';
import { requestBackend } from 'util/requests';

type Props = {
  product: Product;
  onDelete: Function;
};

const ProductCrudCard = ({ product, onDelete }: Props) => {
  const handleDelete = (productId: number) => {
    if (!window.confirm('Tem certeza que deseja excluir?')) {
      return;
    }

    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: `/products/${productId}`,
      withCredentials: true,
    };

    requestBackend(config).then(() => {
      onDelete();
    });
  };

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
        <button
          className="btn btn-outline-danger product-crud-card-button product-crud-card-button-first"
          onClick={() => handleDelete(product.id)}
        >
          Excluir
        </button>
        <Link to={`/admin/products/${product.id}`}>
          <button className="btn btn-outline-secondary product-crud-card-button">
            Editar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCrudCard;
