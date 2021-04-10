import React from "react";

// icons
import recipe from "../../assets/images/Main/recipe.jpg";

import "./main.scss";

const Main = props => {
	return (
		<div className="main">
			{/* Showcase */}
			<section className="showcase">
				<div id="showcase" className="recipesTable">
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
				<div className="box">
					<div className="previous">
						<i class="fas fa-chevron-left"></i>
					</div>
					<div className="flex">
						<div className="page active">
							<p>1</p>
						</div>
						<div className="page">
							<p>2</p>
						</div>
						<div className="page">
							<p>3</p>
						</div>
						<div className="page">
							<p>4</p>
						</div>
						<div className="page">
							<p>5</p>
						</div>
						<div className="page">
							<p>10</p>
						</div>
					</div>
					<div className="next">
						<i class="fas fa-chevron-right"></i>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Main;
