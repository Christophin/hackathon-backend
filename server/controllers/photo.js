const Photo = require('../models').Photo;

module.exports = {
    addPhoto (req, res) {
        Photo.create({
            userId: req.user.id,
            photoUrl: req.body.photoUrl,
            description: req.body.description,
            location: req.body.location

        })
            .then(photo => res.status(201).send(photo))
            .catch(error => res.status(400).send(error));
    },
    getPhotos (req, res)    {
        Photo.findAll().then(photos => res.status(201).send(photos))
            .catch(error => res.status(401).send(error));
    },
    onePhoto    (req, res)  {
        Photo.findById({
            where:  {
                id: req.params.id
            }
        })
            .then(photo => res.status(201).send(photo).send(photo))
            .catch(error => res.status(401).send(error));
    }
};