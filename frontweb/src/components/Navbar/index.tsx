import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  isAuthenticated,
  TokenData,
  getTokenData,
  removeAuthData,
} from 'util/requests';

import 'bootstrap/js/src/collapse.js';
import './styles.css';
import history from 'util/history';

type AuthData = {
  authenticated: boolean;
  tokenData?: TokenData;
};

const Navbar = () => {
  const [authData, setAuthData] = useState<AuthData>({ authenticated: false });

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthData({
        authenticated: false,
      });
    }
  }, []);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthData({
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
                ADMINISTRADOR
              </NavLink>
            </li>
            {authData.authenticated && (
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
          {authData.authenticated ? (
            <>
              <span className="main-nav-username">
                {authData.tokenData?.user_name}
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
