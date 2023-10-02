'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titlePost: {
        type: Sequelize.STRING(120),
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
          len: [1, 80]
        }
      },
      contentPost: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        }
      },
      imagePost: {
        type: Sequelize.STRING,
        allowNull: false,
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
    await queryInterface.addColumn('posts','user_id',{
      type: Sequelize.INTEGER,
      references:{
        model:'users',
        key:'id'
      },
      onUpdate:'CASCADE',
      onDelete:'SET NULL'
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('posts');
  }
};