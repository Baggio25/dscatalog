import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios, { AxiosRequestConfig } from 'axios';

import ProductCard from 'components/ProductCard';
import Pagination from 'components/Pagination';
import CardListLoader from 'components/CardListLoader';

import { BASE_URL } from 'util/requests';

import { Product } from 'types/product';
import { SpringPage } from 'types/vendor/spring';

import './styles.css';

const Catalog = () => {
  const [page, setPage] = useState<SpringPage<Product>>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      baseURL: BASE_URL,
      url: '/products',
      params: {
        page: 0,
        size: 12,
      },
    };

    setIsLoading(true);
    axios(params)
      .then((response) => {
        setPage(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="container my-4 catalog-container">
      <div className="row catalog-title-container">
        <h1>Catálogo de produtos</h1>
      </div>
      <div className="row">
        {isLoading ? (
          <CardListLoader />
        ) : (
          page?.content.map((product) => {
            return (
              <div className="col-sm-6 col-lg-4 col-xl-3" key={product.id}>
                <Link to={`/products/${product.id}`}>
                  <ProductCard product={product} />
                </Link>
              </div>
            );
          })
        )}
      </div>
      {isLoading ? '' : <Pagination />}
    </div>
  );
};

export default Catalog;
