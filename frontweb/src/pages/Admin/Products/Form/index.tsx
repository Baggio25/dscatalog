import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';

import { Product } from 'types/product';
import { requestBackend } from 'util/requests';

import { Category } from 'types/category';

import './styles.css';

type UrlParams = {
  productId: string;
};

const Form = () => {
  const history = useHistory();
  const { productId } = useParams<UrlParams>();
  const isEditing = productId !== 'create';
  const [selectCategories, setSelectCategories] = useState<Category[]>([]);

  const {
    setFocus,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>();

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    requestBackend({ url: '/categories' }).then((response) => {
      setSelectCategories(response.data.content);
    });
  };

  useEffect(() => {
    if (isEditing) {
      requestBackend({ url: `/products/${productId}` }).then((response) => {
        const product = response.data as Product;
        setValue('name', product.name);
        setValue('price', product.price);
        setValue('description', product.description);
        setValue('imgUrl', product.imgUrl);
        setValue('categories', product.categories);
      });
    }
  }, [isEditing, productId, setValue]);

  const onSubmit = (product: Product) => {
    const data = {
      ...product,
      categories: isEditing ? product.categories : [{ id: 1, name: '' }],
    };
    const config: AxiosRequestConfig = {
      method: isEditing ? 'PUT' : 'POST',
      url: isEditing ? `/products/${productId}` : '/products',
      data,
      withCredentials: true,
    };

    requestBackend(config).then(() => {
      if (isEditing) {
        history.push('/admin/products');
      } else {
        setValue('name', '');
        setValue('price', 0);
        setValue('description', '');

        setFocus('name');
      }
    });
  };

  const handleCancel = () => {
    history.push('/admin/products');
  };

  return (
    <div className="product-crud-container">
      <div className="base-card product-crud-form-card">
        <h1 className="product-crud-form-title">DADOS DO PRODUTO</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row product-crud-inputs-container">
            <div className="col-lg-6 product-crud-inputs-left-container">
              {/* <!-- Input Nome --> */}
              <div className="margin-bottom-30">
                <label className="form-label">Nome</label>
                <input
                  {...register('name', {
                    required: 'Campo obrigatório',
                  })}
                  type="text"
                  className={`form-control base-input ${
                    errors.name ? 'is-invalid' : ''
                  }`}
                  name="name"
                  autoFocus
                />
                <div className="invalid-feedback d-block">
                  {errors.name?.message}
                </div>
              </div>

              {/* <!-- Input Categoria --> */}
              <div className="margin-bottom-30">
                <label className="form-label">Categorias</label>
                <Select
                  options={selectCategories}
                  isMulti
                  classNamePrefix="crud-select"
                  getOptionLabel={(category: Category) => category.name}
                  getOptionValue={(category: Category) => String(category.id)}
                />
              </div>

              {/* <!-- Input Preço --> */}
              <div className="margin-bottom-30">
                <label className="form-label">Preço</label>
                <input
                  {...register('price', {
                    required: 'Campo obrigatório',
                  })}
                  type="text"
                  className={`form-control base-input ${
                    errors.price ? 'is-invalid' : ''
                  }`}
                  name="price"
                />
                <div className="invalid-feedback d-block">
                  {errors.price?.message}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div>
                <label className="form-label">Observação</label>
                <textarea
                  rows={10}
                  {...register('description', {
                    required: 'Campo obrigatório',
                  })}
                  className={`form-control h-auto base-input ${
                    errors.description ? 'is-invalid' : ''
                  }`}
                  name="description"
                />
                <div className="invalid-feedback d-block">
                  {errors.description?.message}
                </div>
              </div>
            </div>
          </div>
          <div className="product-crud-form-buttons-container">
            <button
              className="btn btn-outline-danger product-crud-button"
              onClick={handleCancel}
            >
              CANCELAR
            </button>
            <button className="btn btn-primary product-crud-button text-white">
              SALVAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
