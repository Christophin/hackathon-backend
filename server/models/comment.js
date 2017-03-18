'use strict';
module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define('Comment', {
    photoId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    username: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
          Comment.belongsTo(models.User,    {
              foreignKey: 'userId'
          });
          Comment.belongsTo(models.Photo,   {
              foreignKey: 'photoId'
          });
      }
    }
  });
  return Comment;
};