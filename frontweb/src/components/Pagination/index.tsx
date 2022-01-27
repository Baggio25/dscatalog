import { ReactComponent as ArrowIcon } from '../../assets/styles/images/arrow.svg';

import './styles.css';

const Pagination = () => {
  return (
    <div className="pagination-container">
      <ArrowIcon className="pagination-arrow-previous pagination-arrow-inactive" />
      <div className="pagination-item active">1</div>
      <div className="pagination-item">2</div>
      <div className="pagination-item">3</div>
      <div className="pagination-item">...</div>
      <div className="pagination-item">10</div>

      <ArrowIcon className="pagination-arrow-next pagination-arrow-active" />
    </div>
  );
};

export default Pagination;
