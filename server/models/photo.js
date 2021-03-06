const Comment = require("../models").Comment;

'use strict';
module.exports = function(sequelize, DataTypes) {
  var Photo = sequelize.define('Photo', {
    userId: DataTypes.INTEGER,
    username: DataTypes.STRING,
    photoUrl: DataTypes.STRING,
    description: DataTypes.TEXT,
    location: DataTypes.STRING,
    likes: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Photo.hasMany(models.Comment,  {
            foreignKey: 'photoId'
        });
        Photo.belongsTo(models.User, {
            foreignKey: 'userId'
        });
        Photo.hasMany(models.Like, {
            foreignKey: 'photoId'
        });
        // associations can be defined here
      }
    }
  });

  return Photo;
};