const PostCategories = (sequelize, DataTypes) => {
  const PostCategories = sequelize.define(
    'PostCategory',
    {
      categoryId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      postId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
    },
    { timestamps: false }
  );

  PostCategories.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      foreignKey: 'postId',
      through: PostCategories,
    });

    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogposts',
      foreignKey: 'categoryId',
      otherKey: 'postId',
      through: PostCategories,
    });
  };

  return PostCategories;
};

module.exports = PostCategories;
