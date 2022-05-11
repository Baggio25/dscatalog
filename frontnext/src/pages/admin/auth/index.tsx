import Image from "next/image";
import Link from "next/link";
import { useForm } from 'react-hook-form';

import { ButtonIcon } from "../../../components";
import { AuthData } from "../../../@types";

import imgBackground from "../../../../public/auth_image.svg";
import styles from "../../../styles/pages/auth.module.css";

export default function AuthPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  async function onSubmit(data: AuthData) {
    const { username, password } = data;

  }

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
        <Image src={imgBackground} alt="Background Login" />
      </div>
      <div className={`card-base ${styles.authCard}`}>
        <div className={styles.authContent}>
          <>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={`d-flex flex-column align-items-center justify-content-between ${styles.loginForm}`}
            >
              <h2 className={`text-center mb-5 ${styles.formTitle}`}>Login</h2>
              <input
                type="text"
                className="form-control input-base"
                placeholder="Email"
                autoFocus={true}
                {
                  ...register("username", {
                    required: true,
                    pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
                  })
                }
              />
              {
                errors.username?.type === "required" && (
                  <p className="login-form-error">
                    O Preenchimento do E-mail é obrigatório
                  </p>
                )
              }
              {
                errors.username?.type === "pattern" && (
                  <p className="login-form-error">
                    Insira um e-mail válido
                  </p>
                )
              }


              <input
                type="password"
                className="form-control input-base"
                placeholder="Senha"
                {
                  ...register("password", {
                    required: true
                  })
                }
              />
              {
                errors.password?.type === "required" && (
                  <p className="login-form-error">
                    O Preenchimento da Senha é obrigatório
                  </p>
                )
              }
              <Link href="/">
                <a className={styles.loginLinkRecover}>Esqueci a senha</a>
              </Link>
              <div
                className={`d-flex align-items-center justify-content-center ${styles.loginSubmit}`}
              >
                <ButtonIcon label="Acessar" type="submit" />
              </div>
              <div className="text-center">
                <span className={styles.notRegistered}>Não tem cadastro?</span>
                <Link href="/auth/register">
                  <a className={styles.loginLinkRegister}>CADASTRAR</a>
                </Link>
              </div>
            </form>
          </>
        </div>
      </div>
    </div>
  );
}
