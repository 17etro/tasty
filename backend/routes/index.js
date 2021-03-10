const authR = require('./auth');
const { headers } = require('../utils/headers/headers');

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
            res.writeHead(404, headers);
            res.end(JSON.stringify({message: 'Not Found'}));
        }
    }
}

module.exports = Router;