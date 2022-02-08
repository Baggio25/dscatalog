import { Category } from 'types/category';

import './styles.css';

type Props = {
  category: Category;
};

const CategoryCrudCard = ({ category }: Props) => {
  return (
    <div className="base-card category-crud-card">
      <div className="category-crud-card-description-container">
        <h6>
          {category.id} - {category.name}
        </h6>
      </div>
      <div className="category-crud-buttons-container">
        <button className="btn btn-outline-danger category-crud-button category-crud-button-first">
          Excluir
        </button>
        <button className="btn btn-outline-secondary category-crud-button">
          Editar
        </button>
      </div>
    </div>
  );
};

export default CategoryCrudCard;
