'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('posts', [{
      titlePost: 'mi primer post',
      contentPost: 'este es mi primer post usando seeders. espero funcione.',
      imagePost: 'https://cdn.pixabay.com/photo/2023/05/18/13/18/lionel-messi-8002267_640.png',
      user_id:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      titlePost: 'mi segundo post',
      contentPost: 'este es mi segundo post usando seeders. espero funcione.',
      imagePost: 'https://cdn.pixabay.com/photo/2022/09/06/15/53/player-7436980_640.png',
      user_id:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      titlePost: 'mi tercer post',
      contentPost: 'este es mi tercer post usando seeders. espero funcione.',
      imagePost: 'https://cdn.pixabay.com/photo/2018/06/14/10/14/argentina-flag-3474533_1280.jpg',
      user_id:3,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('posts', null, {});
  
  }
};
