import React from "react";
import "./recipe.scss";

import recipe from "../../assets/images/Main/recipe.jpg";

const Recipe = props => {
	return (
		<div className="">
			<div className="recipePage">
				<div className="recipeForm">
					<div className="title">
						<p>Суп з куркою</p>
					</div>
					<div className="imageContainer">
						<div className="image" style={{ backgroundImage: "url(" + recipe + ")" }}></div>
						<div className="description">
							<div>
								<p>Владіміров А. О.</p>
							</div>
							<div>
								<p>Рейтинг: 4</p>
							</div>
							<div>
								<ul>
									<li>
										<p>...</p>
									</li>
									<li>
										<p>...</p>
									</li>
									<li>
										<p>...</p>
									</li>
									<li>
										<p>...</p>
									</li>
									<li>
										<p>...</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="instructions">
						<div className="title">
							<p>Рецепт</p>
						</div>
						<p>
							Не стану тут долго расписывать, что же такое блины, думаю, вы и так все знаете. Блины бывают
							дрожжевые и бездрожжевые, мы будем готовить простые бездрожжевые блины на молоке. У меня
							вопрос лишь в том, как правильно их назвать, блины или всё же блинчики, если речь идёт
							именно о тонких блинах. Я всегда считала, что блин — это тонко пожаренное тесто на
							сковороде, а блинчик — это блин, в который завернули начинку. Однако покопавшись в истории
							этого блюда, я склоняюсь к тому, что мы всё же приготовим с вами сегодня тонкие блинчики на
							молоке. Потому как традиционные русские блины пеклись из густого дрожжевого теста и были
							довольно толстые. Тонкие же блины пришли к нам из Франции, и стали называться блинчиками,
							они могут быть как с начинкой, так и без неё, ведь только в тонкий блинчик вы сможете
							завернуть начинку. И хотя со словом, вроде, всё понятно, я иногда по-прежнему продолжаю
							называть тонкие блинчики — блинами.
						</p>
					</div>
				</div>
				<ul className="commentsSection">
					<div className="title">{/* <p>Коментарии</p> */}</div>
					<li>
						<div className="comment">
							<div className="userName flex">
								<i className="far fa-user"></i>
								<p className="nick">Vlad</p>
								<p className="date">20:31 13.04.2021</p>
							</div>
							<div className="field">
								<p>OHao</p>
							</div>
						</div>
					</li>
					<li>
						<div className="comment">
							<div className="userName flex">
								<i className="far fa-user"></i>
								<p className="nick">Gleb</p>
								<p className="date">20:30 13.04.2021</p>
							</div>
							<div className="field">
								<p>Like!</p>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Recipe;
