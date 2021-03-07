import React, { useState } from 'react';
import axios from 'axios';
import { backendUrl } from '../../config/config';

import './Auth.scss';

//images 
import loginSvg from '../../assets/images/Auth/login.svg';
import registrSvg from '../../assets/images/Auth/register.svg';
import eyeOpen from '../../assets/images/Auth/eye.svg';
import eyeClosed from '../../assets/images/Auth/eyeClosed.svg';

const Auth = (props) => {

    const [ showPass, setShowPass ] = useState(false);

    const [ logInData, setLogInData ] = useState({
        email: '',
        password: ''
    });

    const [ signUpData, setSignUpData ] = useState({
        email: '',
        name: '',
        surname: '',
        password: '',
        secondPassword: ''
    });

    const onChangeMode = (value) => {
        if (value === 'signup') {
            document.getElementById("register").style.left = "0px";
	        document.getElementById("login").style.left = "-650px";
        } else if (value === 'login') {
            document.getElementById("register").style.left = "650px";
	        document.getElementById("login").style.left = "0";
        }
    };
    const onChangeInput = (event, category, key) => {
        if (category === 'login') {
            const newLogInData = {
                ...logInData
            };
            newLogInData[key] = event.target.value;
            setLogInData(newLogInData);
        } else if (category === 'signup') {
            const newSignUpData = {
                ...signUpData
            };
            newSignUpData[key] = event.target.value;
            setSignUpData(newSignUpData);
        }
    };

    const onChangeShowPass = () => {
        setShowPass(!showPass);
    }

    const onLogIn = () => {
        console.log(1);
        axios.post(backendUrl + '/login', {
            name: 'Petro'
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err, err.response);
        });
    };

    const onSignUp = () => {
        axios.post(backendUrl + '/signup', {
            name: 'Petro'
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err, err.response);
        });
    };

    return (
        <div className="auth">
				<div className="auth_container">

                    {/* LOGIN */}
					<div id="login" className="auth_container_body">
						<h1>Вітаємо вас</h1>
						<img 
                            src={loginSvg}
                            alt="auth" 
                        />
						<div className="auth_container_topbar">
							<div className="active-item">
								<p>Вхід</p>
							</div>
							<div className="item" onClick={()=>onChangeMode('signup')}>
								<p>Реєстрація</p>
							</div>
						</div>
						<input 
                            value={logInData.email}
                            onChange={(e) => onChangeInput(e, 'login', 'email')}
                            placeholder="Електронна пошта" 
                            type="text" 
                        />
						<div className="input">
							<input 
                                value={logInData.password}
                                onChange={(e) => onChangeInput(e, 'login', 'password')}
                                placeholder="Пароль" 
                                type={showPass ? "text" : "password"} 
                            />
                            <div className="eye" onClick={onChangeShowPass}>
                                <img src={showPass ? eyeOpen : eyeClosed} alt="" />
                            </div>
						</div>
						<button 
                            onClick={onLogIn}
                            className="submit"
                        >
                            Ввійти
                        </button>
					</div>

					{/* REGISTER */}
					<div id="register" className="auth_container_body">
						<h1>Вітаємо вас</h1>
						<img 
                            src={registrSvg}
                            alt="auth" 
                        />
						<div className="auth_container_topbar">
							<div className="item" onClick={()=>onChangeMode('login')}>
								<p>Вхід</p>
							</div>
							<div className="active-item">
								<p>Реєстрація</p>
							</div>
						</div>
						<input 
                            value={signUpData.name}
                            onChange={(e) => onChangeInput(e, 'signup', 'name')}
                            placeholder="Ім'я" 
                            type="text" 
                        />
						<input 
                            value={signUpData.surname}
                            onChange={(e) => onChangeInput(e, 'signup', 'surname')}
                            placeholder="Прізвище" 
                            type="text" 
                        />
						<input 
                            value={signUpData.email}
                            onChange={(e) => onChangeInput(e, 'signup', 'email')}
                            placeholder="Електронна пошта" 
                            type="text" 
                        />
						<div className="input">
							<input 
                                value={signUpData.password}
                                onChange={(e) => onChangeInput(e, 'signup', 'password')}
                                placeholder="Пароль" 
                                type={showPass ? "text" : "password"} 
                            />
                            <div className="eye" onClick={onChangeShowPass}>
                                <img src={showPass ? eyeOpen : eyeClosed} alt="" />
                            </div>
						</div>
						<input 
                            value={signUpData.secondPassword}
                            onChange={(e) => onChangeInput(e, 'signup', 'secondPassword')}
                            placeholder="Підтвердіть пароль" 
                            type="password" 
                        />
						<button 
                            onClick={onSignUp}
                            className="submit"
                        >
                            Зареєструватися
                        </button>
					</div>
				</div>
			</div>
    );
};

export default Auth;