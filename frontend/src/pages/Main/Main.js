import React from "react";

// icons
import recipe from '../../assets/images/Main/recipe.jpg';

import "./main.scss";

const Main = (props) => {
    return (
        <div className="main">
            {/* Showcase */}
            <section className="showcase">
                <div className="recipesTable container">
                    <div class="recipe">
                        <img className="image" src={recipe} alt="" />
                        <div className="textField">
                            <i className="far fa-user"></i>
                            <p className="nick">Nick</p>
                            <p className="description">Description</p>
                        </div>
                    </div>
                    <div className="recipe">
                        <img className="image" src={recipe} alt="" />
                        <div className="textField">
                            <i className="far fa-user"></i>
                            <p className="nick">Nick</p>
                            <p className="description">Description</p>
                        </div>
                    </div>
                    <div className="recipe">
                        <img className="image" src={recipe} alt="" />
                        <div className="textField">
                            <i className="far fa-user"></i>
                            <p className="nick">Nick</p>
                            <p className="description">Description</p>
                        </div>
                    </div>
                    <div className="recipe">
                        <img className="image" src={recipe} alt="" />
                        <div className="textField">
                            <i className="far fa-user"></i>
                            <p className="nick">Nick</p>
                            <p className="description">Description</p>
                        </div>
                    </div>
                    <div className="recipe">
                        <img className="image" src={recipe} alt="" />
                        <div className="textField">
                            <i className="far fa-user"></i>
                            <p className="nick">Nick</p>
                            <p className="description">Description</p>
                        </div>
                    </div>
                    <div className="recipe">
                        <img className="image" src={recipe} alt="" />
                        <div className="textField">
                            <i className="far fa-user"></i>
                            <p className="nick">Nick</p>
                            <p className="description">Description</p>
                        </div>
                    </div>
                    <div className="recipe">
                        <img className="image" src={recipe} alt="" />
                        <div className="textField">
                            <i className="far fa-user"></i>
                            <p className="nick">Nick</p>
                            <p className="description">Description</p>
                        </div>
                    </div>
                    <div className="recipe">
                        <img className="image" src={recipe} alt="" />
                        <div className="textField">
                            <i className="far fa-user"></i>
                            <p className="nick">Nick</p>
                            <p className="description">Description</p>
                        </div>
                    </div>
                    <div className="recipe">
                        <img className="image" src={recipe} alt="" />
                        <div className="textField">
                            <i className="far fa-user"></i>
                            <p className="nick">Nick</p>
                            <p className="description">Description</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="flex" style={{
                backgroundColor: '#eeeeee',
                color: '#333'
            }}>
                <ul>
                    <li><p>1</p></li>
                    <li><p>2</p></li>
                    <li><p>3</p></li>
                    <li><p>4</p></li>
                    <li><p>5</p></li>
                </ul>
            </div>
        </div>
    );
};

export default Main;
