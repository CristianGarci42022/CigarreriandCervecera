const express=require("express")
const router =express.Router();
const {getProductos, nuevoProduct, getProductoById, ActualizarProdcuto, EliminarProducto, } =require("../controllers/productsContoller")//Traemos la respuesta json desde el controlador

router.route('/productos').get(getProductos)//Establecemos desde que ruta queremos ver el getProducts
router.route('/producto/nuevo').post(nuevoProduct); //establecemos la ruta de nue vo producto
router.route('/producto/:id').get(getProductoById);//para que el id se establesca como un parametro se le añade (:)antes del (id), si solo se coloca el id seria el parte de la ruta->ruta para consultarpor id 
router.route('/producto/:id').put(ActualizarProdcuto);//creacion de la ruta de actualizacion 
router.route('/producto/:id').delete(EliminarProducto);//creacion de la ruta de eliminacion de producto por id
module.exports=router;