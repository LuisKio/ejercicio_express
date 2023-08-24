const {Router} = require('express');
const {getProveedores, createProveedor, updateProveedor, getArticulos} = require('../controllers/proveedores.controllers');

const router = Router();

// RUTAS GENERALES
router.get('/', getProveedores);
router.get('/articulos', getArticulos);
router.post('/', createProveedor);
router.put('/', updateProveedor);


module.exports = router;

