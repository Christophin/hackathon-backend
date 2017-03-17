'use strict';
module.exports = function(sequelize, DataTypes) {
  var Photo = sequelize.define('Photo', {
    userId: DataTypes.STRING,
    photoUrl: DataTypes.STRING,
    description: DataTypes.TEXT,
    location: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
          Photo.hasMany(models.Comment);
        // associations can be defined here
      }
    }
  });

  return Photo;
};