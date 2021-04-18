import React from "react";

import "./Menu.scss";

const toShow = value => {
	if (value === "menuHide") {
		document.getElementById("menu").style.opacity = "0";
		document.getElementById("menu").style.visibility = "hidden";
		if (true) {
			document.getElementById("showcase").style.paddingLeft = "0";
		}
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

const Menu = props => {
	return (
		<div id="menu" className="menu">
			<div className="bar">
				<i class="fal fa-times" onClick={() => toShow("menuHide")}></i>
				<div className="mainMenuElement">
					<p>Сортувати за</p>
				</div>
			</div>
			<div className="sortBy">
				<div className="menuElement">
					<div className="con">
						<p>Рейтингом</p>
						<i class="far fa-chevron-right"></i>
					</div>
				</div>
				<div className="menuElement">
					<div className="con">
						<p>Популярністю</p>
						<i class="far fa-chevron-right"></i>
					</div>
				</div>
				<div className="menuElement" onMouseLeave={() => toShow("categoryHide")}>
					<div className="flex" onClick={() => toShow("categoryShow")}>
						<div className="con">
							<p>Категорією</p>
							<i class="far fa-ellipsis-h"></i>
						</div>
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
						<div className="con">
							<p>Тегом</p>
							<i class="far fa-ellipsis-h"></i>
						</div>
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
	);
};

export default Menu;
