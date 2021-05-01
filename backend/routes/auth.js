const { logIn, signUp, getUserInfo } = require("../controllers/auth/auth");

const authRouter = {
  "/login": {
    POST: (req, res) => logIn(req, res),
  },
  "/signup": {
    POST: (req, res) => signUp(req, res),
  },
  "/getUser": {
    GET: (req, res) => getUserInfo(req, res),
  },
};

module.exports = authRouter;
