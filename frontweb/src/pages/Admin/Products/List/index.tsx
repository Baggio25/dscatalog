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
    getProducts(0);
  }, []);

  const getProducts = (pageNumber: number) => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/products?sort=id,desc',
      params: {
        page: pageNumber,
        size: 3,
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
            <ProductCrudCard
              product={product}
              onDelete={() => getProducts(page.number)}
            />
          </div>
        ))}
      </div>
      <Pagination
        pageCount={page ? page.totalPages : 0}
        range={3}
        onChange={getProducts}
      />
    </div>
  );
};

export default List;
