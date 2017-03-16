const UserController = require('../controllers/user');
const middleware = require('../middleware');


module.exports = (app) => {
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, access-token");
        next();
    });
    app.post('/users', UserController.register);
    app.post('/login', UserController.login);
};
