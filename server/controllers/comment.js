const Comment = require('../models').Comment;
const User = require('../models').User;
const Photo = require('../models').Photo;
module.exports = {
    addComment  (req, res)  {
        Comment.create({
            photoId: req.params.id,
            userId: req.user.id,
            username: req.user.username,
            content: req.body.content
        })
            .then(comment => res.status(201).send(comment))
            .catch(error => res.status(401).send(error));
    },
    getComments (req, res)  {
        Comment.findAll({
            where:  {
                photoId: req.params.id
            },
            include:
                {model: User, attributes: ['username', 'profilePic']}
        })
    }
};