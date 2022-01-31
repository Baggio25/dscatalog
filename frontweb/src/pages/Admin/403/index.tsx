import { Link } from 'react-router-dom';
import './styles.css';

const Page403 = () => {
  return (
    <div className="page403-container">
      <h1>Acesso não autorizado</h1>
      <p>Entrar em contato com o adminstrador</p>
      <Link to="/admin">
        <button type="button" className="btn btn-primary btn-sm ">
          Início
        </button>
      </Link>
    </div>
  );
};

export default Page403;
