import { NavLink } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
  return (
    <nav className="admin-nav-container">
      <ul>
        <NavLink to="/admin/products" className="admin-nav-item">
          <li>Produtos</li>
        </NavLink>
        <NavLink to="/admin/categories" className="admin-nav-item">
          <li>Categorias</li>
        </NavLink>
        <NavLink to="/admin/users" className="admin-nav-item">
          <li>Usuários</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
