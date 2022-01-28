import { Route, Switch } from 'react-router-dom';
import { ReactComponent as AuthImage } from '../../../assets/styles/images/auth-image.svg';

import Login from './Login';

import './styles.css';

const Auth = () => {
  return (
    <div className="auth-container">
      <div className="auth-banner-container">
        <h1>Divulgue seus produtos no DSCatalog</h1>
        <p>
          Faça parte do nosso catálogo de divulgação e aumente a venda dos seus
          produtos.
        </p>
        <div className="auth-banner-image-container">
          <AuthImage />
        </div>
      </div>
      <div className="auth-form-container">
        <Switch>
          <Route path="/admin/auth/login">
            <Login />
          </Route>
          <Route path="/admin/auth/signup">
            <h3>Card de Signup</h3>
          </Route>
          <Route path="/admin/auth/recover">
            <h3>Card de Recover</h3>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Auth;
