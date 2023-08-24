const { Op } = require('sequelize');
const {articulos, proveedores} = require('../database/models');

class ArticulosServices{
    static async getArticulos(){
        try {
            const data = await articulos.findAll({
                attributes: ['nombre', 'stock'],
                include: [{
                    model: proveedores,
                    attributes: ['nombre', 'direccion'],
                }]
            });
            return data;
        } catch (error) {
            throw(error);
        }
    }

    static async getArticulo(nombre){
        try {
            const data = await articulos.findOne({
                attributes: ['id', 'nombre', 'stock'],
                where: {
                    nombre
                },
                include: [{
                    model: proveedores,
                    attributes: ['nombre', 'direccion'],
                }]
            });

            return data;
        } catch (error) {
            throw(error);
        }
    }

    static async getArticuloById(id){
        try {
            const data = await articulos.findOne({
                attributes: ['stock'],
                where: {
                    id
                }
            });

            return data;
        } catch (error) {
            throw(error);
        }
    }

    static async createArticulo(data){
        try {
            const response = await articulos.create(data);
            return response;
        } catch (error) {
            throw(error);
        }
    }

    static async updateArticulo(payload){
        try {
            const response = await articulos.update(payload, {
                where: {
                    id: payload.id
                }
            })
        } catch (error) {
            throw(error);
        }
    }
}



module.exports = ArticulosServices;