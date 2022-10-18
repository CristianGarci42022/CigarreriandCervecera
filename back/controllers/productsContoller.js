const producto=require("../models/productos")
const fetch =(url)=>import('node-fetch').then(({default:fetch})=>fetch(url)); //Usurpación del require

//Ver la lista de productos
exports.getProductos=async (req,res,next) =>{//metodo asyncono(async)
    const productos= await producto.find();
    res.status(200).json({
        success:true,
        cantidad: productos.length,
        productos
    })
}

//Ver un producto por ID
exports.getProductoById= async (req, res, next)=>{//req->Lo que se requiere, Res->lo que me devuelve, next->
    const producId= await producto.findById(req.params.id)
    
    if (!producId){
            return res.status(404).json({//producto no encontrado 404
            success:false,
            message: 'No encontramos ese producto'
        })
    }
    res.status(200).json({
        success:true,
        message:"Aqui debajo encuentras información sobre tu producto: ",
        producId
    })
}

//Update un producto
exports.ActualizarProdcuto= async (req,res,next) =>{
    let updproducto= await producto.findById(req.params.id) //Variable de tipo modificable
    if (!updproducto){ //Verifico que el objeto no existe para finalizar el proceso
            return res.status(404).json({
            success:false,
            message: 'No encontramos ese producto'
        })
    }
    //Si el objeto si existia, entonces si ejecuto la actualización
    updproducto= await producto.findByIdAndUpdate(req.params.id, req.body, {
        new:true, //Valido solo los atributos nuevos o actualizados
        runValidators:true
    });
    //Respondo Ok si el producto si se actualizó
    res.status(200).json({
        success:true,
        message:"Producto actualizado correctamente",
        updproducto
    })
}


//Eliminar un producto
exports.EliminarProducto= async (req,res,next) =>{
    const product= await producto.findById(req.params.id) 
    if (!product){ 
            return res.status(404).json({ 
            success:false,
            message: 'No encontramos ese producto'
        })
    }

    await product.remove();//Eliminamos el proceso
    res.status(200).json({
        success:true,
        message:"Producto eliminado correctamente"
    })
}


//crecion de nuevo producto api/productos
exports.nuevoProduct=async(req,res,next)=>{
    const product= await producto.create(req.body);//se alimenta o se saca el nuevo producto del body que se crea en el frond
    //consecuencia de tipo POST
    res.status(201).json({//Respuesta positiva es (201)
        success:true,//si hay exito
        product//reespuesta con el producto que se acaba de crear 
    })
}

//HABLEMOS DE FETCH->otra forma de realizar consultas->
//FETCH->es un modulo esterno a node.js
//FETCH->no se importa con una const(objecto local)-> si no como se importaba en JAVA (import fetch .....)
//esto generalmente genera un conflicto y se arregla con la siguiente Trampa
//FETCH->utlizacion de tampra para utlilizar e importar fetch ->const fetch =(url)=>import('node-fetch').then(({default:fetch})=>fetch(url)); //Usurpación del require
//Ver todos los productos
// function verProductos(){
//     fetch('http://localhost:4000/api/productos')
//     .then(res=>res.json())
//     .then(res=>console.log(res))
//     .catch(err=>console.error(err))
// }

//verProductos(); //LLamamos al metodo creado para probar la consulta

//Ver por id
// function verProductoPorID(id){
//     fetch('http://localhost:4000/api/producto/'+id)
//     .then(res=>res.json())
//     .then(res=>console.log(res))
//     .catch(err=>console.error(err))
// }

//verProductoPorID('63456a8d9163cb9dbbcaa235'); Probamos el metodo con un id
