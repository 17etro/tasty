const authR = require('./auth');

class Router {

    constructor(url, method) {
        this.url = url;
        this.method = method;
        this.routes = {
            ...authR
        }
    }

    usage(req, res) {
        const { url, method, routes } = this;
        if (routes[url] && routes[url][method]) {
            routes[url][method](req, res);
        } else {
            res.statusCode = 404;
            res.write('Not Found');
            res.end();
        }
    }
}

module.exports = Router;