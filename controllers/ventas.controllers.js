const ArticulosServices = require('../services/articulos.services');
const VentasServices = require('../services/ventas.services');

//GENERA UNA VENTA
const generarVenta = async(req, res, next) => {
    //Username, id del articulo, cantidad a comprar
    try {
        const data = req.body;
        const articulo = await ArticulosServices.getArticuloById(data.idArticulo);
        
        if(data.cantidad <= 0){
            return next({
                status: 400,
                message: 'La cantidad a vender es incorrecta',
                error: 'cantidad not found'
            });
        }

        if(articulo.stock <= 0){
            return next({
                status: 400,
                message: 'El stock es insuficiente',
                error: 'Stock not found'
            });
        }

        data.stock = articulo.stock - data.cantidad;

        const dataArticulo = {
            id: data.idArticulo,
            stock: data.stock
        }

        await ArticulosServices.updateArticulo(dataArticulo);
        await VentasServices.createVenta(data);

        res.status(200).send({
            message: 'Venta exitosa'
        });
    } catch (error) {
        next(error);
    }
}

const informeVentas = async(req, res, next) => {
    try {
        const data = await VentasServices.getVentas();
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    generarVenta,
    informeVentas
}