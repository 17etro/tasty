import React from "react";

// icons
import recipe from "../../assets/images/Main/recipe.jpg";

import "./main.scss";

const Main = props => {
	return (
		<div className="main">
			{/* Showcase */}
			<section className="showcase">
				<div className="recipesTable">
					<div className="recipe">
						<img className="image" src={recipe} alt="" />
						<div className="field">
							<div>
								<i className="far fa-user"></i>
							</div>
							<p className="nick">Nick</p>
							<p className="description">Description</p>
						</div>
					</div>
					<div className="recipe">
						<img className="image" src={recipe} alt="" />
						<div className="field">
							<div>
								<i className="far fa-user"></i>
							</div>
							<p className="nick">Nick</p>
							<p className="description">Description</p>
						</div>
					</div>
					<div className="recipe">
						<img className="image" src={recipe} alt="" />
						<div className="field">
							<div>
								<i className="far fa-user"></i>
							</div>
							<p className="nick">Nick</p>
							<p className="description">Description</p>
						</div>
					</div>
					<div className="recipe">
						<img className="image" src={recipe} alt="" />
						<div className="field">
							<div>
								<i className="far fa-user"></i>
							</div>
							<p className="nick">Nick</p>
							<p className="description">Description</p>
						</div>
					</div>
					<div className="recipe">
						<img className="image" src={recipe} alt="" />
						<div className="field">
							<div>
								<i className="far fa-user"></i>
							</div>
							<p className="nick">Nick</p>
							<p className="description">Description</p>
						</div>
					</div>
					<div className="recipe">
						<img className="image" src={recipe} alt="" />
						<div className="field">
							<div>
								<i className="far fa-user"></i>
							</div>
							<p className="nick">Nick</p>
							<p className="description">Description</p>
						</div>
					</div>
					<div className="recipe">
						<img className="image" src={recipe} alt="" />
						<div className="field">
							<div>
								<i className="far fa-user"></i>
							</div>
							<p className="nick">Nick</p>
							<p className="description">Description</p>
						</div>
					</div>
					<div className="recipe">
						<img className="image" src={recipe} alt="" />
						<div className="field">
							<div>
								<i className="far fa-user"></i>
							</div>
							<p className="nick">Nick</p>
							<p className="description">Description</p>
						</div>
					</div>
					<div className="recipe">
						<img className="image" src={recipe} alt="" />
						<div className="field">
							<div>
								<i className="far fa-user"></i>
							</div>
							<p className="nick">Nick</p>
							<p className="description">Description</p>
						</div>
					</div>
				</div>
			</section>
			<footer>
				<div className="flex">
					<div className="page">1</div>
					<div className="page">2</div>
					<div className="page">3</div>
					<div className="page">4</div>
					<div className="page">5</div>
				</div>
			</footer>
		</div>
	);
};

export default Main;
