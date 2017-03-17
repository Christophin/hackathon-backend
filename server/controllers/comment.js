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
    }
};