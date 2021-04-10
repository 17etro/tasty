import React from "react";

import "./header.scss";

import logo from "../../../assets/images/Main/logo.png";

const toShow = value => {
	if (value === "menuShow") {
		document.getElementById("menu").style.visibility = "visible";
		document.getElementById("menu").style.opacity = "1";
		if (true) {
			document.getElementById("showcase").style.paddingLeft = "20vw";
		}
	}
};

const Header = props => {
	return (
		<div className="navbar">
			<div className="subHeader flex">
				<i className="fas fa-filter" onClick={() => toShow("menuShow")}></i>
				<div className="image">
					<img src={logo} alt="Tasty" />
				</div>
				<div className="container flex">
					<div className="flex">
						<div id="searchBar">
							<input type="text" id="search" />
							<i className="fas fa-search" />
						</div>
						<button>
							<i className="fas fa-plus"></i>
							Додати рецепт
						</button>
					</div>
					<div className="main-auth flex">
						<i className="fas fa-user"></i>
						<button className="hide">Увійти</button>
						<div className="divider hide"></div>
						<button className="hide">Зареєструватися</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
