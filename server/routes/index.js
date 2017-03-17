const UserController = require('../controllers/user');
const middleware = require('../middleware');
const PhotoController = require('../controllers/photo');
const CommentController = require('../controllers/comment');


module.exports = (app) => {
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, access-token");
        next();
    });
    app.get('/users', UserController.getUsers);
    app.post('/users', UserController.register);
    app.post('/login', UserController.login);

    app.post('/photos', middleware.authenticate, PhotoController.addPhoto);
    app.get('/photos', PhotoController.getPhotos);
    app.get('/photo/:id', PhotoController.onePhoto);

    app.post('/photo/:id/comment', middleware.authenticate, CommentController.addComment);
    app.get('/photo/:id/comments', CommentController.getComments);
};
