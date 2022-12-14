module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PostCategories', {
      postId: {
        allowNull: false,
        onDelete: 'CASCADE',
        primaryKey: true,
        references: {
          key: 'id',
          model: 'BlogPosts',
        },
        type: Sequelize.INTEGER,
      },
      categoryId: {
        allowNull: false,
        onDelete: 'CASCADE',
        primaryKey: true,
        references: {
          key: 'id',
          model: 'Categories',
        },
        type: Sequelize.INTEGER,
      },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('PostCategories');
  },
};
