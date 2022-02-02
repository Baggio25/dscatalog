import ButtonCreate from 'components/ButtonCreate';
import CategoryCrudCard from '../CategoryCrudCard';
import './styles.css';

const List = () => {
  const category = {
    id: 1,
    name: 'Computadores',
  };

  return (
    <>
      <div className="category-crud-bar-container">
        <ButtonCreate linkTo="/admin/categories/create" />
        <div className="base-card category-filter-container">search bar</div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-md-12">
          <CategoryCrudCard category={category} />
        </div>
        <div className="col-sm-6 col-md-12">
          <CategoryCrudCard category={category} />
        </div>
      </div>
    </>
  );
};

export default List;
