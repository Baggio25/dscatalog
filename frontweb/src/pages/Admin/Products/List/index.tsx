import { useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';

import ButtonCreate from 'components/ButtonCreate';
import Pagination from 'components/Pagination';

import { Product } from 'types/product';
import { SpringPage } from 'types/vendor/spring';

import { requestBackend } from 'util/requests';

import ProductCrudCard from '../ProductCrudCard';

import './styles.css';

const List = () => {
  const [page, setPage] = useState<SpringPage<Product>>();

  //const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/products?sort=id,desc',
      params: {
        page: 0,
        size: 50,
      },
    };

    //setIsLoading(true);
    requestBackend(config)
      .then((response) => {
        setPage(response.data);
      })
      .finally(() => {
        //setIsLoading(false);
      });
  };

  return (
    <div className="product-crud-container">
      <div className="product-crud-bar-container">
        <ButtonCreate linkTo="/admin/products/create" />
        <div className="base-card product-filter-container">search bar</div>
      </div>

      <div className="row">
        {page?.content.map((product) => (
          <div className="col-sm-6 col-md-12" key={product.id}>
            <ProductCrudCard product={product} onDelete={() => getProducts()} />
          </div>
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default List;
