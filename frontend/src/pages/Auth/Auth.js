import React, { useState } from "react";
import useContext from "../../context/useContext";
import * as actions from "../../context/actions/index";
import Spinner from "../../components/UI/Spinner/Spinner";
import ModalWindow from "../../components/UI/Modal/ModalWindow";

import { login, signup } from "../../api/auth";

import "./Auth.scss";

//images
import loginSvg from "../../assets/images/Auth/login.svg";
import registrSvg from "../../assets/images/Auth/register.svg";
import eyeOpen from "../../assets/images/Auth/eye.svg";
import eyeClosed from "../../assets/images/Auth/eyeClosed.svg";

const Auth = (props) => {
  const { dispatch } = useContext();
  const [showPass, setShowPass] = useState(false);

  const [logInData, setLogInData] = useState({
    email: "",
    password: "",
  });

  const [signUpData, setSignUpData] = useState({
    email: "",
    name: "",
    surname: "",
    password: "",
    secondPassword: "",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modalInfo, setModalInfo] = useState({});

  const onChangeMode = (value) => {
    setError(false);
    if (value === "signup") {
      document.getElementById("register").style.left = "0px";
      document.getElementById("login").style.left = "-650px";
    } else if (value === "login") {
      document.getElementById("register").style.left = "650px";
      document.getElementById("login").style.left = "0";
    }
  };
  const onChangeInput = (event, category, key) => {
    if (category === "login") {
      const newLogInData = {
        ...logInData,
      };
      newLogInData[key] = event.target.value;
      setLogInData(newLogInData);
    } else if (category === "signup") {
      const newSignUpData = {
        ...signUpData,
      };
      newSignUpData[key] = event.target.value;
      setSignUpData(newSignUpData);
    }
  };

  const onChangeShowPass = () => {
    setShowPass(!showPass);
  };

  const emailConfirmes =
    signUpData.secondPassword.trim() === signUpData.password.trim();

  return (
    <div className="">
      <div className="auth">
        <div className="auth_container">
          {loading && <Spinner />}
          {!loading && <ModalWindow info={modalInfo} />}

          {/* LOGIN */}
          <div id="login" className="auth_container_body">
            {!loading && (
              <>
                <h1>Вітаємо вас</h1>
                <img src={loginSvg} alt="auth" />
                <div className="auth_container_topbar">
                  <div className="active-item">
                    <p>Вхід</p>
                  </div>
                  <div
                    id="item2"
                    className="item"
                    onClick={() => onChangeMode("signup")}
                  >
                    <p>Реєстрація</p>
                  </div>
                </div>
                <input
                  value={logInData.email}
                  onChange={(e) => onChangeInput(e, "login", "email")}
                  placeholder="Електронна пошта"
                  type="text"
                  id="email1"
                />
                <div className="input">
                  <input
                    value={logInData.password}
                    onChange={(e) => onChangeInput(e, "login", "password")}
                    placeholder="Пароль"
                    type={showPass ? "text" : "password"}
                    id="pass1"
                  />
                  <div className="eye" onClick={onChangeShowPass}>
                    <img src={showPass ? eyeOpen : eyeClosed} alt="" />
                  </div>
                </div>
                {error && <p>{error}</p>}
                <button onClick={onLogIn} className="submit" id="submit1">
                  Ввійти
                </button>
              </>
            )}
          </div>

          {/* REGISTER */}
          <div id="register" className="auth_container_body">
            {!loading && (
              <>
                <h1>Вітаємо вас</h1>
                <img src={registrSvg} alt="auth" />
                <div className="auth_container_topbar">
                  <div className="item" onClick={() => onChangeMode("login")}>
                    <p>Вхід</p>
                  </div>
                  <div className="active-item">
                    <p>Реєстрація</p>
                  </div>
                </div>
                <input
                  value={signUpData.name}
                  onChange={(e) => onChangeInput(e, "signup", "name")}
                  placeholder="Ім'я"
                  type="text"
                />
                <input
                  value={signUpData.surname}
                  onChange={(e) => onChangeInput(e, "signup", "surname")}
                  placeholder="Прізвище"
                  type="text"
                />
                <input
                  value={signUpData.email}
                  onChange={(e) => onChangeInput(e, "signup", "email")}
                  placeholder="Електронна пошта"
                  type="text"
                  id="email2"
                />
                <div className="input">
                  <input
                    value={signUpData.password}
                    onChange={(e) => onChangeInput(e, "signup", "password")}
                    placeholder="Пароль"
                    type={showPass ? "text" : "password"}
                  />
                  <div className="eye" onClick={onChangeShowPass}>
                    <img src={showPass ? eyeOpen : eyeClosed} alt="" />
                  </div>
                </div>
                <input
                  value={signUpData.secondPassword}
                  onChange={(e) => onChangeInput(e, "signup", "secondPassword")}
                  placeholder="Підтвердіть пароль"
                  type="password"
                />
                {error && <p>{error}</p>}
                <button
                  onClick={emailConfirmes ? onSignUp : () => {}}
                  className={emailConfirmes ? "submit" : "disabled-submit"}
                >
                  Зареєструватися
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  async function onLogIn() {
    setLoading(true);

    try {
      const result = await login(logInData);
      dispatch(actions.successLogIn(result.data));
      return props.history.push("/main");
    } catch (err) {
      setError(
        err.response && err.response.data && err.response.data.message
          ? err.response.data.message
          : "Сталась серверна помилка..."
      );
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  async function onSignUp() {
    setLoading(true);

    try {
      const result = await signup(signUpData);
      onChangeMode("login");
      setModalInfo({
        type: "sentence-modal",
        sentence: "Ви успішно зареєструвались!",
        cbNo: () => {
          setModalInfo({});
        },
      });
    } catch (err) {
      setError(
        err.response && err.response.data && err.response.data.message
          ? err.response.data.message
          : "Сталась серверна помилка..."
      );
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }
};

export default Auth;
