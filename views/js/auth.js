"use strict"

// global variables
let mode = "login";

// onClickEvents
const onChangeMode = (name) => {
    mode = name;
    if ( name === 'signup' ) {
        document.getElementById('signup').style.display = 'block';
        document.getElementById('login').style.display = 'none';

        document.getElementById('login-label').classList.remove('active-item');
        document.getElementById('login-label').classList.add('item');
        document.getElementById('signup-label').classList.remove('item');
        document.getElementById('signup-label').classList.add('active-item');
    } else {
        document.getElementById('signup').style.display = 'none';
        document.getElementById('login').style.display = 'block';

        document.getElementById('signup-label').classList.remove('active-item');
        document.getElementById('signup-label').classList.add('item');
        document.getElementById('login-label').classList.remove('item');
        document.getElementById('login-label').classList.add('active-item');
    }
    logInForm = {
        ...LogInFormDefault
    };
    SignUpForm = {
        ...SignUpFormDefault
    };

};