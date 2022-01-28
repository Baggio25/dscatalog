import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { ReactComponent as ArrowIcon } from '../../assets/styles/images/arrow.svg';

import ProductPrice from 'components/ProductPrice';
import { Product } from 'types/product';
import { BASE_URL } from 'util/requests';

import './styles.css';

type UrlParams = {
  productId: string;
};

const ProductDetails = () => {
  const { productId } = useParams<UrlParams>(); //captura os parametros de url
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    axios.get(`${BASE_URL}/products/${productId}`).then((response) => {
      setProduct(response.data);
    });
  }, [productId]);

  return (
    <div className="product-details-container">
      <div className="product-details-card base-card">
        <Link to="/products">
          <div className="product-details-goback-container">
            <ArrowIcon />
            <h2>Voltar</h2>
          </div>
        </Link>
        <div className="row">
          <div className="col-xl-6">
            <div className="product-details-img-container">
              <img src={product?.imgUrl} alt={product?.name} />
            </div>
            <div className="product-details-name-price-container">
              <h1>{product?.name}</h1>
              {product && <ProductPrice price={product?.price} />}
            </div>
          </div>
          <div className="col-xl-6">
            <div className="product-details-description-container">
              <h2>Descrição do produto</h2>
              <p>{product?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
