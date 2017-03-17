const Comment = require('../models').Comment;

module.exports = {
    addComment  (req, res)  {
        Comment.create({
            photoId: req.params.id,
            userId: req.user.id,
            content: req.body.content
        })
            .then(comment => res.status(201).send(comment))
            .catch(error => res.status(401).send(error));
    },
    getComments (req, res)  {
        Comment.findAll({
            where: {
                photoId: req.params.id
            }
        })
            .then(comments => res.status(201).send(comments))
            .catch(error => res.status(401).send(error));
    }
};