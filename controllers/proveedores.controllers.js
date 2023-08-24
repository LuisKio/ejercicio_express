const ProveedoresServices = require('../services/proveedores.services');

//OBTENER TODOS LOS PROVEEDORES
const getProveedores = async (req, res, next) => {
    try {
        const data = await ProveedoresServices.getProveedores();
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

//CREACION DEL PROVEEDOR
const createProveedor = async (req, res, next) => {
    // Data que se tiene que recibir: nombre, direccion
    try {
        const data = req.body;

        const resProveedor = await ProveedoresServices.getProveedor(data.nombre);
        
        if (resProveedor) {
            return next({
                status: 400,
                message: 'El nombre del proveedor ya existe',
                error: 'Proveedor not found'
            });
        }

        const resultado = await ProveedoresServices.createProveedor(data);


        res.status(200).json({
            message: 'Proveedor creado con éxito',
        });
    } catch (error) {
        next(error);
    }
}

//MODIFICACION DE DIRECCION DEL PROVEEDOR
const updateProveedor = async (req, res, next) => {
    //DATA QUE RECIBE: DIRECCION
    try {
        const data = req.body;

        const resProveedor = await ProveedoresServices.getProveedor(data.nombre);

        if (!resProveedor) {
            return next({
                status: 400,
                message: 'El proveedor no existe',
                error: 'Proveedor not found'
            });
        }

        data.id = resProveedor.dataValues.id;
        await ProveedoresServices.updateProveedor(data);


        res.status(200).json({
            message: 'Proveedor actualizado con éxito',
        });
    } catch (error) {
        next(error);
    }
}

//OBTIENE TODOS LOS ARTICULOS DE UN SOLO PROVEEDOR
const getArticulos = async (req, res, next) => {
    try {
        const data = req.body;
        console.log(data);
        const articulosAll = await ProveedoresServices.getArticulos(data);
        
        res.status(200).json(articulosAll);
    } catch (error) {
        next(error);
    }
}


module.exports = {
    getProveedores,
    createProveedor,
    updateProveedor,
    getArticulos
}