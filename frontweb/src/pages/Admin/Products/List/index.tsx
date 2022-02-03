import { useEffect, useState } from 'react';

import ButtonCreate from 'components/ButtonCreate';
import { Product } from 'types/product';
import { SpringPage } from 'types/vendor/spring';

import ProductCrudCard from '../ProductCrudCard';
import './styles.css';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from 'util/requests';

const List = () => {
  const [page, setPage] = useState<SpringPage<Product>>();

  //const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
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
  }, []);

  return (
    <div className="product-crud-container">
      <div className="product-crud-bar-container">
        <ButtonCreate linkTo="/admin/products/create" />
        <div className="base-card product-filter-container">search bar</div>
      </div>

      <div className="row">
        {page?.content.map((product) => (
          <div className="col-sm-6 col-md-12" key={product.id}>
            <ProductCrudCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
