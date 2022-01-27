import './styles.css';

const Navbar = () => {
  return (
    <nav className="admin-nav-container">
      <ul>
        <a href="link" className="admin-nav-item active">
          <li>Produtos</li>
        </a>
        <a href="link" className="admin-nav-item">
          <li>Categorias</li>
        </a>
        <a href="link" className="admin-nav-item">
          <li>Usuários</li>
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
