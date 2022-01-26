import ProductPrice from 'components/ProductPrice';
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
        <ProductPrice />
      </div>
    </div>
  );
};

export default ProductCard;
