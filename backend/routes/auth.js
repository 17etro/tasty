const { logIn, signUp } = require('../controllers/auth/index');

const authRouter = {
    '/login': {
        'POST': (req, res) => logIn(req, res),
    },
    '/signup': {
        'POST': (req, res) => signUp(req, res),
    },
};

module.exports = authRouter;