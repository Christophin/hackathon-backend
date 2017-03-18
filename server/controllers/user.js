const User = require('../models').User;
const bcrypt = require('bcryptjs');
const jwt = require('jwt-simple');
const appSecrets = require ('../config/secrets');
const Photo = require('../models').Photo;
const Comment = require('../models').Comment;

module.exports = {
    getUsers (req, res) {
        User.findAll( {
            include:    {
                model: Photo, include: Comment
            }
        }).then(users => res.status(201).send(users))
            .catch(error => res.status(401).send(error));
    },
    register (req, res) {
        let salt = bcrypt.genSaltSync(10);
        let hashedPass = bcrypt.hashSync(req.body.password, salt);
        User.create({
            username: req.body.username,
            name: req.body.name,
            email: req.body.email,
            password: hashedPass,
            salt: salt,
            profilePic: req.body.profilePic,
            backgroundPic: req.body.backgroundPic,
            profileTitle: req.body.profileTitle
        })
            .then(user => res.status(201).send(user))
            .catch(error => res.status(400).send(error));
    },
    login (req, res)    {
        User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(user =>   {
            if(!user)   {
                return res.status(401).send({message: 'No records match' })
            }
        let input = bcrypt.hashSync(req.body.password, user.salt);
        if (input === user.password)    {
            let token = jwt.encode({ id: user.id, username: user.username}, appSecrets.jwtSecret);
            let json = {
                user: user,
                token: token
            };
            return res.status(201).send(json)
        } else  {
            return res.status(401).send({message: 'No records match'})
        }
    })
    .catch(error => res.status(400).send(error));
    },
    getUser(req, res)   {
        User.findById(req.params.id, {
            include:    {
                model: Photo, include: Comment
            }
        })
            .then(user => res.status(201).send(user))
            .catch(error => res.status(401).send(error))
    }
};