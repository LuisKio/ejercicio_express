const { Op } = require('sequelize');
const {proveedores, articulos} = require('../database/models');

class ProveedoresServices {
    static async getProveedores(){
        try {
            const data = await proveedores.findAll({
                attributes: ['id', 'nombre', 'direccion']
            });
            return data;
        } catch (error) {
            throw(error)
        }
    }

    static async getProveedor(nombre){
        try {
            const data = await proveedores.findOne({
                attributes: ['id', 'nombre', 'direccion'],
                where: {
                    nombre
                }
            });
            
            return data;
        } catch (error) {
            throw(error)
        }
    }

    static async createProveedor(data){
        try {
            const response = await proveedores.create(data);
            return response;
        } catch (error) {
            throw(error);
        }
    }

    static async updateProveedor(payload){
        try {
            const response = await proveedores.update(payload, {
                where: {
                    id: payload.id
                }
            });
        } catch (error) {
            throw(error);
        }
    }

    static async getArticulos({idProveedor}){
        try {
            const response = await articulos.findAll({
                attributes: ['nombre', 'stock'],
                where: {
                    idProveedor
                }
            });

            return response;
        } catch (error) {
            throw(error);
        }
    }
}

module.exports = ProveedoresServices;