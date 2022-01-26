import ProductImg from '../../assets/styles/images/product.png';
import './styles.css';

const ProductCard = () => {
  return (
    <div className="base-card product-card">
      <div className="card-top-container">
        <img src={ProductImg} alt="Nome do produto" />
      </div>
      <div className="card-bottom-container">
        <h6>Nome do produto</h6>
        <p>2.563,23</p>
      </div>
    </div>
  );
};

export default ProductCard;
