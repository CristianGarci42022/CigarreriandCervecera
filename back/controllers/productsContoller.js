exports.getProducts=(req,res,next)=>{
    res.status(200).json({
        success:true,
        Message:"en esta ruta ud puede visualizar todos los productos"

    })

}