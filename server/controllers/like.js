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
    },
    getLike (req, res)  {
        Like.findOne({
            where:  {
                photoId: req.query.photoId,
                userId: req.query.userId
            }
        })
            .then(result => {
                let hasLikes = Object.keys(result).length>0;
                res.status(200).send(hasLikes);
            })
            .catch(error => res.status(400).send(error));
    }
};