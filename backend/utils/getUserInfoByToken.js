const jwt = require('jsonwebtoken');

module.exports = async (token) => {
  try {
    const info = await jwt.verify(token, process.env.jwt_secret_key);
    return info;
  } catch (e) {
    return { message: "token expired" };
  }
};
