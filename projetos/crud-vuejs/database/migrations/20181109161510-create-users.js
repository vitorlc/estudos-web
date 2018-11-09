module.exports = {
  up: (queryInterface, DataTypes) => {
    queryInterface.createTable('pessoa', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
    });
  },

  down: (queryInterface) => {
    queryInterface.dropTable('pessoa');
  }
};