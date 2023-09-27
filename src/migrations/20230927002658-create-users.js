'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
          notEmpty: true,
        }
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
          isEmail: true,
          notEmpty: true,
        }
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
          min:6
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};