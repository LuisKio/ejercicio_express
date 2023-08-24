'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ventas extends Model {
    static associate(models) {
      ventas.belongsTo(models.articulos, {foreignKey: 'idArticulo'})
    }
  }
  ventas.init({
    username: DataTypes.STRING,
    idArticulo: DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ventas',
  });
  return ventas;
};