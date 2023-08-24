const ArticulosServices = require('../services/articulos.services');

//OBTIENE TODOS LOS ARTICULOS
const getArticulos = async (req, res, next) => {
    try {
        const data = await ArticulosServices.getArticulos();
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

const getArticulo = async (req, res, next) => {
    try {
        const data = req.params.articulo;
        const resArticulo = await ArticulosServices.getArticulo(data);
        res.status(200).json(resArticulo);
    } catch (error) {
        next(error);
    }
}

//CREAR ARTICULOS
const createArticulo = async (req, res, next) => {
    //NOMBRE, STOCK, IDPROVEEDOR
    try {
        const data = req.body;
        const resArticulo = await ArticulosServices.getArticulo(data.nombre);
    
        if (resArticulo) {
            return next({
                status: 400,
                message: 'El articulo ya existe',
                error: 'articulo not found'
            });
        }

        await ArticulosServices.createArticulo(data);
        
        res.status(200).json({
            message: 'Articulo agregado con éxito'
        });

    } catch (error) {
        console.log(error);
        next(error);
    }
}

//MODICAR STOCK Y NOMBRE DEL ARTICULO
const updateArticulo = async (req, res, next) => {
    try {
        const data = req.body;

        const resArticulo = await ArticulosServices.getArticulo(data.nombre);

        if (!resArticulo) {
            return next({
                status: 400,
                message: 'El proveedor no existe',
                error: 'Proveedor not found'
            });
        }

        data.id = resArticulo.dataValues.id;
        data.stock = data.stock + resArticulo.dataValues.stock;
        
        if(data.stock < 0){
            return next({
                status: 400,
                message: 'El stock no puede ser menor a cero',
                error: 'stock error'
            });
        }

        await ArticulosServices.updateArticulo(data);
        
        res.status(200).json({
            message: 'Articulo actualizado con éxito',
        });
    } catch (error) {
        next(error);
    }
}



module.exports = {
    getArticulos,
    createArticulo,
    updateArticulo,
    getArticulo
}