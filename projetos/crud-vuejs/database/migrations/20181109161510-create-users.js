module.exports = {
  up: (queryInterface, DataTypes) => {
    queryInterface.createTable('pessoa', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nome: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      idade: {
        type: Sequelize.INTEGER,
      },
    });
  },

  down: (queryInterface) => {
    queryInterface.dropTable('pessoa');
  }
};