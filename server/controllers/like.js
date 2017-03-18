const Photo = require('../models').Photo;
const Comment = require('../models').Comment;
const User = require('../models').User;
const Like = require('../models').Like;

module.exports =  {
    addLike (req, res)  {
        Like.create({
            photoId: req.params.id,
            userId: req.user.id
        })
            .then(like => res.status(201).send(like))
            .catch(error => res.status(400).send(error));
    }
};