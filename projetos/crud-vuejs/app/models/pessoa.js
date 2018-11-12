module.exports = (sequelize, DataTypes) => {
    const Pessoa = sequelize.define('pessoa', {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      idade: DataTypes.INTEGER,
      endereco: DataTypes.STRING,
      sexo: DataTypes.BOOLEAN

    },{
        timestamps: false,
        freezeTableName: true,
        tableName: 'pessoa'
    });
  
    return Pessoa;
  }