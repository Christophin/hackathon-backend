'use strict';
module.exports = function(sequelize, DataTypes) {
  var Like = sequelize.define('Like', {
    photoId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
          Like.belongsTo(models.User, {
              foreignKey: 'userId'
          });
          Like.belongsTo(models.Photo, {
              foreignKey: 'photoId'
          })
      }
    }
  });
  return Like;
};