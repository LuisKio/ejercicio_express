const {Router} = require('express');
const {getArticulos, createArticulo, updateArticulo, getArticulo} = require('../controllers/articulos.controllers');

const router = Router();

// RUTAS GENERALES
router.get('/', getArticulos);
router.get('/:articulo', getArticulo)
router.post('/', createArticulo);
router.put('/', updateArticulo);




module.exports = router;