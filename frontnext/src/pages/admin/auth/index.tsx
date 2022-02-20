import Image from "next/image";
import Link from "next/link";

import { ButtonIcon } from "../../../components";
import imgBackground from "../../../../public/authimage.svg";
import styles from "../../../styles/pages/auth.module.css";

export default function AuthPage() {
  return (
    <div className={styles.authContainer}>
      <div className={`d-none d-lg-block ${styles.authInfo}`}>
        <h1 className={styles.authInfoTitle}>
          Divulgue seus produtos <br /> no DSCatalog
        </h1>
        <p className={styles.authInfoSubtitle}>
          Faça parte do nosso catálogo de divulgação e <br /> aumente a venda
          dos seus produtos.
        </p>
        <Image src={imgBackground} alt="Auth Image" />
      </div>
      <div className={`card-base ${styles.loginForm}`}>
        <div className={styles.authContent}>
          <>
            <form
              className={`d-flex flex-column align-items-center 
                            justify-content-between ${styles.loginForm}`}
            >
              <h2 className={`text-center mb-5 ${styles.formTitle}`}>Login</h2>
              <input
                type="text"
                className="form-control input-base"
                placeholder="Email"
              />
              <input
                type="password"
                className="form-control input-base"
                placeholder="Senha"
              />
              <Link href="/">
                <a className={styles.loginLinkRecover}>Esqueci a senha</a>
              </Link>
              <div
                className={`d-flex alig-items-center justify-content-center ${styles.loginSubmit}`}
              >
                <ButtonIcon label="Fazer login" type="submit" />
              </div>
              <div className="text-center">
                <span className={styles.notRegistered}>Não tem cadastro? </span>
                <Link href="/">
                  <a className={styles.loginRegister}>CADASTRAR</a>
                </Link>
              </div>
            </form>
          </>
        </div>
      </div>
    </div>
  );
}
