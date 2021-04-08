import React from "react";

import "./header.scss";

import logo from "../../../assets/images/Main/logo.png";

const toShow = value => {
	if (value === "menuShow") {
		document.getElementById("menu").style.visibility = "visible";
		document.getElementById("menu").style.opacity = "1";
	} else if (value === "menuHide") {
		document.getElementById("menu").style.opacity = "0";
		document.getElementById("menu").style.visibility = "hidden";
	} else if (value === "categoryShow") {
		document.getElementById("category1").style.display = "block";
		document.getElementById("category2").style.display = "block";
	} else if (value === "categoryHide") {
		document.getElementById("category1").style.display = "none";
		document.getElementById("category2").style.display = "none";
	} else if (value === "tagShow") {
		document.getElementById("tag1").style.display = "block";
		document.getElementById("tag2").style.display = "block";
	} else if (value === "tagHide") {
		document.getElementById("tag1").style.display = "none";
		document.getElementById("tag2").style.display = "none";
	}
};

const Header = props => {
	return (
		<div className="navbar">
			<div id="menu" className="menu">
				<div className="bar flex">
					<i class="fal fa-times" onClick={() => toShow("menuHide")}></i>
					<div className="image first">
						<img src={logo} alt="Tasty" />
					</div>
				</div>
				<div className="sortBy">
					<div className="mainMenuElement">
						<p>Сортувати за:</p>
					</div>
					<div className="menuElement">
						<p>Рейтингом</p>
					</div>
					<div className="menuElement">
						<p>Популярністю</p>
					</div>
					<div className="menuElement" onMouseLeave={() => toShow("categoryHide")}>
						<div className="flex" onClick={() => toShow("categoryShow")}>
							<p>Категорією</p>
							<i class="fas fa-ellipsis-h"></i>
						</div>
						<div id="category1" className="subMenuElement">
							<p>Випічка</p>
						</div>
						<div id="category2" className="subMenuElement">
							<p>Супи</p>
						</div>
					</div>
					<div className="menuElement" onMouseLeave={() => toShow("tagHide")}>
						<div className="flex" onClick={() => toShow("tagShow")}>
							<p>Тегом</p>
							<i class="fas fa-ellipsis-h"></i>
						</div>
						<div id="tag1" className="subMenuElement">
							<p>#Українська_кухня</p>
						</div>
						<div id="tag2" className="subMenuElement">
							<p>#Обема</p>
						</div>
					</div>
				</div>
			</div>
			<div className="flex">
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
