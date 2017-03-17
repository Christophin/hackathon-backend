'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.addColumn('Photos', 'username', Sequelize.STRING);

  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.removeColumn('Photos', 'username');
  }
};
