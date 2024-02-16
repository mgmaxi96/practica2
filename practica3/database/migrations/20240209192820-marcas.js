'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable ('marcas',{
nombre:{
  type:Sequelize.STRING,
  allowNull:false
},
pais:{
  type:Sequelize.STRING,
  allowNull:false
},
id:{
  type:Sequelize.INTEGER,
  primaryKey:true,
  autoIncrement:true
}


   })
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
