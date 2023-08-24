const proveedorRouter = require('./proveedores.routes');
const articulosRouter = require('./articulos.routes');
const ventasRouter = require('./venta.routes');


const apiRouter = (app) => {
    app.use('/api/v1/proveedores', proveedorRouter);
    app.use('/api/v1/articulos', articulosRouter);
    app.use('/api/v1/ventas', ventasRouter);
}

module.exports = apiRouter;