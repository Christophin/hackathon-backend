const Photo = require('../models').Photo;
const Comment = require('../models').Comment;
const User = require('../models').User;
const Like = require('../models').Like;
module.exports = {
    addPhoto (req, res) {
        Photo.create({
            userId: req.user.id,
            username: req.user.username,
            photoUrl: req.body.photoUrl,
            description: req.body.description,
            location: req.body.location,
            likes: 0
        })
            .then(photo => res.status(201).send(photo))
            .catch(error => res.status(400).send(error));
    },
    getPhotos (req, res)    {
        Photo.findAll({
            include: [
                { model: User },
                { model: Comment },
                { model: Like }
            ],
            order: [['createdAt',  'DESC']]
        }).then(photos => res.status(201).send(photos))
            .catch(error => res.status(401).send(error));
    },
    onePhoto    (req, res)  {
        Photo.findById(req.params.id, {
            include: [
                { model: Comment },
                { model: User },
                { model: Like }
        ]})
            .then(photo => res.status(201).send(photo))
            .catch(error => res.status(401).send(error));
    }
};