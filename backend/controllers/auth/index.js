const signUp = (req, res) => {
    let body = "";
    req.on('data', buffer => {
        body += buffer.toString();
    });
    req.on('end', () => {
        console.log(body);
        res.end();
    })
};

const logIn = (req, res) => {
    let body = "";
    req.on('data', buffer => {
        body += buffer.toString();
    });
    req.on('end', () => {
        console.log(body);
        res.end();
    })
};

module.exports = {
    signUp,
    logIn
};