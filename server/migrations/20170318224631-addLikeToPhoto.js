'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.addColumn('Photos', 'likes', Sequelize.INTEGER);

    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.removeColumn('Photos', 'likes');
    }
};
