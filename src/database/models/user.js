const User = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      image: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );

  User.associate = (models) => {
    User.hasMany(models.BlogPost, { as: 'blogposts', foreignKey: 'userId' });
  };

  return User;
};

module.exports = User;
