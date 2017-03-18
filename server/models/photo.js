const Comment = require("../models").Comment;

'use strict';
module.exports = function(sequelize, DataTypes) {
  var Photo = sequelize.define('Photo', {
    userId: DataTypes.INTEGER,
    username: DataTypes.STRING,
    photoUrl: DataTypes.STRING,
    description: DataTypes.TEXT,
    location: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Photo.hasMany(models.Comment,  {
            foreignKey: 'photoId'
        });
        // associations can be defined here
      }
    }
  });

  return Photo;
};