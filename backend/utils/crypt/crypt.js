const crypto = require("crypto")

module.exports.hash = function(password){
    return new Promise((resolve, reject) => {
        const salt = crypto.randomBytes(8).toString("hex")

        crypto.scrypt(password, salt, 64, (err, derivedKey) => {
            if (err) reject(err);
            resolve(salt + ":" + derivedKey.toString('hex'))
        });
    })
};

const { promisify } = require('util');
const scrypt = promisify(crypto.scrypt);

module.exports.verify = async function(password, hash){
    const [salt, key] = hash.split(":")
    const keyBuffer = Buffer.from(key, 'hex')
    const derivedKey = await scrypt(password, salt, 64)
    return crypto.timingSafeEqual(keyBuffer, derivedKey)
};




