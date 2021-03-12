'use strict';

module.exports = function(value, rules) {
    let dataIsValid = true;
    const rightTypes = ["number", "string"];
    if (!rightTypes.includes(typeof value)) {
        return false;
    }

    if (rules.required) {
        dataIsValid = value.toString().trim() !== "" && dataIsValid;
    }
    if (rules.isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        dataIsValid = pattern.test(value) && dataIsValid;
    }
    if (rules.minLength) {
        dataIsValid = value.toString().length >= rules.minLength && dataIsValid;
    }
    if (rules.maxLength) {
        dataIsValid = value.toString().length <= rules.maxLength && dataIsValid;
    }

    return dataIsValid;
};