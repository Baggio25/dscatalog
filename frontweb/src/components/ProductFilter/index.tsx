import { useForm, Controller } from 'react-hook-form';
import { useEffect, useState } from 'react';
import Select from 'react-select';

import { Category } from 'types/category';
import { requestBackend } from 'util/requests';

import { ReactComponent as SearchIcon } from 'assets/images/search-icon.svg';
import './styles.css';

type ProductFilterData = {
  name: string;
  category: Category | null;
};

const ProductFilter = () => {
  const [selectCategories, setSelectCategories] = useState<Category[]>([]);

  const { register, handleSubmit, control, setValue, getValues } =
    useForm<ProductFilterData>();

  const onSubmit = (productFilterData: ProductFilterData) => {
    console.log('Enviou', productFilterData);
  };

  const handleFormClear = () => {
    setValue('name', '');
    setValue('category', null);
  };

  const handleChangeCategory = (value: Category) => {
    setValue('category', value);

    const obj: ProductFilterData = {
      name: getValues('name'),
      category: getValues('category'),
    };

    console.log('Enviou', obj);
  };

  const getCategories = () => {
    requestBackend({ url: '/categories' }).then((response) => {
      setSelectCategories(response.data.content);
    });
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="base-card product-filter-container">
      <form className="product-filter-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="product-filter-name-container">
          <input
            {...register('name')}
            type="text"
            className="form-control"
            name="name"
            placeholder="Nome do produto"
          />
          <button className="product-filter-button-search-icon">
            <SearchIcon />
          </button>
        </div>
        <div className="product-filter-bottom-container">
          <div className="product-filter-category-container">
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={selectCategories}
                  isClearable
                  placeholder="Categoria"
                  classNamePrefix="filter-select"
                  getOptionLabel={(category: Category) => category.name}
                  getOptionValue={(category: Category) => String(category.id)}
                  onChange={(value) => handleChangeCategory(value as Category)}
                />
              )}
            />
          </div>
          <button
            onClick={handleFormClear}
            className="btn btn-outline-secondary product-filter-btn-clear"
          >
            LIMPAR <span className="product-filter-btn-word">FILTRO</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductFilter;
