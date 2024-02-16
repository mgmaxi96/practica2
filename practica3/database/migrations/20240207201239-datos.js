'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   queryInterface.addColumn(
    'products',
    'type_id', // estos es una foreing key, por eso le agrego referencia
    {
type:Sequelize.INTEGER,
allowNull:false,
references:{
model:'product_types',
key:'id'
}

    }
   )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
