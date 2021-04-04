import React from "react";

import "./header.scss";

import logo from "../../../assets/images/Main/logo.png";

const Header = props => {
	return (
		<div className="navbar">
			<div className="container flex">
				<div className="flex">
					<i className="fas fa-bars"></i>
					<div className="image">
						<img src={logo} alt="Tasty" />
					</div>
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
	);
};

export default Header;
