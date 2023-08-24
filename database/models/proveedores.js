'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class proveedores extends Model {
    static associate(models) {
      proveedores.hasMany(models.articulos, {foreignKey: 'idProveedor'})
    }
  }
  proveedores.init({
    nombre: DataTypes.STRING,
    direccion: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'proveedores',
  });
  return proveedores;
};