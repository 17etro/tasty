import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import useAuthContext from "../../../context/useContext";
import * as actions from "../../../context/actions";

import "./header.scss";

import logo from "../../../assets/images/Main/logo.png";

const toShow = (value) => {
  if (value === "menuShow") {
    document.getElementById("menu").style.visibility = "visible";
    document.getElementById("menu").style.opacity = "1";
    if (true) {
      document.getElementById("showcase").style.paddingLeft = "20vw";
    }
  }
};

const Header = ({ isMainMode }) => {
  const { state, dispatch } = useAuthContext();
  const history = useHistory();
  const isAuth = state.token;
  const onLogOut = () => {
    dispatch(actions.logOut());
    history.push("/main");
  };

  return (
    <div className="navbar">
      <div className="subHeader flex">
        {isMainMode && (
          <i className="fas fa-filter" onClick={() => toShow("menuShow")} />
        )}
        <div className="image">
          <NavLink to="/main">
            <img src={logo} alt="Tasty" />
          </NavLink>
        </div>
        <div className="container flex">
          <div className="flex">
            {isMainMode && (
              <div id="searchBar">
                <input type="text" id="search" />
                <i className="fas fa-search" />
              </div>
            )}
            {isMainMode && (
              <button>
                <i className="fas fa-plus"></i>
                Додати рецепт
              </button>
            )}
          </div>
          <div className="main-auth flex">
            {isAuth && (
              <NavLink
                to="/profile"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {state.surname && state.name && (
                  <p
                    style={{
                      width: "100px",
                      textAlign: "right",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {state.surname + " " + state.name[0].toUpperCase() + "."}
                  </p>
                )}
                <i className="fas fa-user" />
              </NavLink>
            )}
            {!isAuth && (
              <>
                <NavLink to="/auth">
                  <button className="hide">Увійти</button>
                </NavLink>
                <div className="divider hide" />
                <NavLink to="/auth">
                  <button className="hide">Зареєструватися</button>
                </NavLink>
              </>
            )}
            {isAuth && (
              <>
                <div className="divider hide" />
                <button onClick={onLogOut} className="hide">
                  Вийти
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
