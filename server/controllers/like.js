const Photo = require('../models').Photo;
const Comment = require('../models').Comment;
const User = require('../models').User;
const Like = require('../models').Like;

module.exports =  {
    addLike (req, res)  {
        Like.findOne({
                where:  {
                    photoId: req.params.id,
                    userId: req.user.id
                }
            }).then(result => {
                if(!result || result.length === 0 || result === null) {
                    Like.create({
                        photoId: req.params.id,
                        userId: req.user.id
                    })
                        .then(like => res.status(201).send(like))
                        .catch(error => res.status(408).send(error));
                } else  {
                    res.status(401).send('you have already liked this');
                }
            })

            .catch(error => res.status(400).send(error));

    },
    getLikes(photo, user)  {
        return  Like
            .findOne({
                where:  {
                    photoId: photo,
                    userId: user
                }
            });
    }
};