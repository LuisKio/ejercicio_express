const {Router} = require('express');
const {generarVenta, informeVentas} = require('../controllers/ventas.controllers');

const router = Router();

// RUTAS GENERALES
router.post('/', generarVenta);
router.get('/', informeVentas);

module.exports = router;
