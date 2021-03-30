import * as actionTypes from '../actionTypes/actionTypes';

export const successLogIn = (data) => {
    const newObj = {
        token: '111',
    };
    localStorage.setItem('tasty_auth', JSON.stringify(newObj));

    return {
        type: actionTypes.SUCCESS_LOGIN,
        //....
    };
};