import { useContext, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { isAuthenticated, getTokenData, removeAuthData } from 'util/requests';
import history from 'util/history';

import { AuthContext } from 'AuthContext';

import 'bootstrap/js/src/collapse.js';
import './styles.css';

const Navbar = () => {
  const { authContextData, setAuthContextData } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthContextData({
        authenticated: false,
      });
    }
  }, [setAuthContextData]);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthContextData({
      authenticated: false,
    });
    history.replace('/admin/auth');
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
      <div className="container-fluid">
        <Link to="/" className="nav-logo-text">
          <h4>DS Catalog</h4>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#dscatalog-navbar"
          aria-controls="dscatalog-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="dscatalog-navbar">
          <ul className="navbar-nav offset-md-4 main-menu">
            <li>
              <NavLink to="/" activeClassName="active" exact>
                INÍCIO
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" activeClassName="active">
                CATÁLOGO
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin" activeClassName="active">
                {authContextData.authenticated ? 'ADMINISTRADOR' : 'ENTRAR'}
              </NavLink>
            </li>
            {authContextData.authenticated && (
              <li>
                <a
                  href="#logout"
                  className="main-nav-logout-sm"
                  onClick={handleLogoutClick}
                >
                  SAIR
                </a>
              </li>
            )}
          </ul>
        </div>

        <div className="main-nav-logout">
          {authContextData.authenticated ? (
            <>
              <span className="main-nav-username">
                {authContextData.tokenData?.user_name}
              </span>
              <a href="#logout" onClick={handleLogoutClick}>
                SAIR
              </a>
            </>
          ) : (
            ''
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
