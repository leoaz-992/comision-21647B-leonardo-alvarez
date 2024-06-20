'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users',[{
      userName:'andmin',
      email:'admin@project.com',
      password:'admin123456',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userName:'user1',
      email:'user1@project.com',
      password:'user123456',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userName:'user2',
      email:'user2@project.com',
      password:'user23456',
      createdAt: new Date(),
      updatedAt: new Date()
    }],{});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
  }
};
