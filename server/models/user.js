const Photo = require('../models').Photo;

'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    salt: DataTypes.STRING,
    profilePic: DataTypes.STRING,
    backgroundPic: DataTypes.STRING,
    profileTitle: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
          User.hasMany(models.Photo, {
            foreignKey: 'userId'
          });
        // associations can be defined here
      }
    }
  });
  return User;
};