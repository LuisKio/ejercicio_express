'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class articulos extends Model {
    
    static associate(models) {
      articulos.belongsTo(models.proveedores, {foreignKey: 'idProveedor'})
      articulos.hasOne(models.ventas, {foreignKey: 'idArticulo'});
    }
  }
  articulos.init({
    nombre: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    idProveedor: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'articulos',
  });
  return articulos;
};