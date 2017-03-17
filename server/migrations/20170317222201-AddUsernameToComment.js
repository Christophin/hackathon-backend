'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.addColumn('Comments', 'username', Sequelize.STRING);

    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.removeColumn('Comments', 'username');
    }
};

