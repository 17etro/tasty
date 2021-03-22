import React from 'react';

// icons
import logo from '../../assets/images/Main/logo.png';
import recipe from '../../assets/images/Main/recipe.jpg';

import './main.scss';

const Main = (props) => {
    return (
        <div className="main">
            <div className="navbar">
                <div className="container flex">
                    <div className="flex nav" style={{minWidth: '410px'}} >
                        <i className="fas fa-bars"></i>
                        <div className="image">
                            <img src={logo} alt="Tasty" />
                        </div>
                        <ul>
                            <li>
                                <div id="searchBar">
                                    <input type="text" id="search" />
                                    <i 
                                        className="fas fa-search" 
                                        style={{float: 'right', fontSize: '20px'}}
                                    />
                                </div>
                            </li>
                            <li>
                                <button>
                                    <i className="fas fa-plus"></i>
                                    Додати рецепт
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="main-auth flex" style={{ minWidth: '210px' }} >
                        <i className="fas fa-user"></i>
                        <button className="hide">Увійти</button>
                        <div className="divider hide"></div>
                        <button className="hide">Зареєструватися</button>
                    </div>
                </div>
            </div>
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