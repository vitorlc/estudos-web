'use strict';
module.exports = (sequelize, DataTypes) => {
    const Pessoa = sequelize.define('pessoa', {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
    },{
        timestamps: false,
        freezeTableName: true,
        tableName: 'pessoa'
    });
  
    return Pessoa;
  }