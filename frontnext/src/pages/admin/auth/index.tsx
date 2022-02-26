import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";

import { loginUser } from "../../../utils/auth";
import { ButtonIcon } from "../../../components";

import imgBackground from "../../../../public/authimage.svg";
import styles from "../../../styles/pages/auth.module.css";

export default function AuthPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    setIsLoading(true);
    const { username, password } = data;
    loginUser(username, password)
      .then((res) => {
        if (res.access_token) router.reload();
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

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
      <div className={`card-base ${styles.authCard}`}>
        <div className={styles.authContent}>
          <>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={`d-flex flex-column align-items-center 
                            justify-content-between ${styles.loginForm}`}
            >
              <h2 className={`text-center mb-5 ${styles.formTitle}`}>Login</h2>
              <input
                type="text"
                className="form-control input-base"
                placeholder="Email"
                {...register("username", {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Email inválido",
                  },
                })}
              />
              {errors.username?.type === "required" && (
                <p className="login-form-error">
                  O Preenchimento do email é obrigatório
                </p>
              )}
              {errors.username?.type === "pattern" && (
                <p className="login-form-error">Insira um email válido</p>
              )}

              <input
                type="password"
                className="form-control input-base  margin-top-30"
                placeholder="Senha"
                {...register("password", {
                  required: true,
                })}
              />
              {errors.password?.type === "required" && (
                <p className="login-form-error">
                  O Preenchimento da senha é obrigatório
                </p>
              )}
              <Link href="/">
                <a className={`margin-top-30 ${styles.loginLinkRecover}`}>
                  Esqueci a senha
                </a>
              </Link>
              <div
                className={`d-flex align-items-center justify-content-center ${styles.loginSubmit}`}
              >
                <ButtonIcon
                  disabled={isLoading}
                  label="Fazer login"
                  type="submit"
                />
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
