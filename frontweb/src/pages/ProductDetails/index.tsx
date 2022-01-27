import { Link } from 'react-router-dom';
import ProductPrice from 'components/ProductPrice';
import { ReactComponent as ArrowIcon } from '../../assets/styles/images/arrow.svg';

import './styles.css';

const ProductDetails = () => {
  return (
    <div className="product-details-container">
      <div className="product-details-card base-card">
        <Link to="/products">
          <div className="product-details-goback-container">
            <ArrowIcon />
            <h2>Voltar</h2>
          </div>
        </Link>
        <div className="row">
          <div className="col-xl-6">
            <div className="product-details-img-container">
              <img
                src="https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg"
                alt="produto"
              />
            </div>
            <div className="product-details-name-price-container">
              <h1>Nome do produto</h1>
              <ProductPrice price={2190.0} />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="product-details-description-container">
              <h2>Descrição do produto</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Temporibus, officiis. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Fuga minima placeat laboriosam architecto
                quos, qui harum inventore blanditiis ducimus numquam cumque
                eaque consequatur tempore repudiandae ullam eum totam ipsum
                autem sint in. Molestiae quos voluptatibus odio expedita
                accusantium! A eaque ducimus alias et commodi iste
                reprehenderit, esse aut? Hic, officiis?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
