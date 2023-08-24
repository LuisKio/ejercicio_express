const { ventas, articulos } = require('../database/models');

class VentasServices {
    static async createVenta(data) {
        try {
            const response = await ventas.create(data);
            return response;
        } catch (error) {
            throw (error);
        }
    }

    static async getVentas() {
        try {
            const response = await ventas.findAll({
                include: [{
                    model: articulos,
                    attributes: ['nombre']
                }]
            });
            return response;
        } catch (error) {
            throw (error);
        }
    }
}

module.exports = VentasServices;