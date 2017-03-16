const UserController = require('../controllers/user');
const middleware = require('../middleware');


module.exports = (app) => {
    app.post('/users', UserController.register);
    app.post('/login', UserController.login);
};
