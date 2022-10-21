import React, { Fragment,useEffect } from 'react'
import MetaData from './layout/MetaData'
import { useDispatch } from 'react-redux'
import { getProducts } from '../actions/productActions'

export const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])



    return (
        <Fragment>
            <MetaData title="Lo mejor para el fin de semana"></MetaData>
            <h1 id="encabezado_productos">Ultimos Productos</h1>
            <section id="productos" className='container mt-5'>
                <div className='row'>
                    {/*Producto 1*/}
                    {/* Inicio de tarjeta */}
                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            {/* imagen */}
                            <img className='card-img-top mx-auto' src='./images/Galgerias/DeTodito.jpg' alt="Detodito Familiar"></img>
                            {/* Titulo */}
                            <div className='card-body d-flex flex-column'>

                                <h5 className="card-title"><a href='http://192.168.10.80:3000'>Detodito Familiar</a></h5>
                                {/* Valoracion de estrellas */}
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 12 Opiniones</span>
                                </div>
                                {/* Precio */}
                                <div className="card-footer d-flex justify-content-between">

                                    <p className='text-danger font-weight-bold'>$12.600</p>
                                    <a href=' http://192.168.10.80:3000'
                                        id="cart"
                                        className='btn btn-warning px-3 ml-4'>
                                        <i className="fa fa-shopping-cart"></i>
                                    </a>
                                    {/* Boton de agregar al carrito */}
                                    {/*
                                    <p className='text-danger font-weight-bold'>$12.600</p>
                                    <form href=" http://192.168.10.80:3000">
                                        <button
                                            id="cart"
                                            type="button"
                                            className="btn btn-warning px-3 ml-4">
                                            <i className="fa fa-shopping-cart"></i>
                                        </button>
                                    </form>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Fin de tarjeta */}

                    {/*Producto 2*/}
                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./images/Galgerias/Doritos.jpg' alt="Doritos Familiar"></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 className="card-title"><a href=' http://192.168.10.80:3000'>Doritos Familiar</a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 4 Opiniones</span>
                                </div>
                                <div className="card-footer d-flex justify-content-between">
                                    <p className='text-danger font-weight-bold'>$8.600</p>
                                    <form action=" http://192.168.10.80:3000">
                                        <button
                                            id="cart"
                                            type="button"
                                            className="btn btn-warning px-3 ml-4">
                                            <i className="fa fa-shopping-cart"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Producto 3*/}
                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./images/Galgerias/M&M.jpg' alt="M&M "></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 className="card-title"><a href=' http://192.168.10.80:3000'>M&M Tradicional</a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 42 Opiniones</span>
                                </div>
                                <div className="card-footer d-flex justify-content-between">
                                    <p className='text-danger font-weight-bold'>$4.600</p>
                                    <form action=" http://192.168.10.80:3000">
                                        <button
                                            id="cart"
                                            type="button"
                                            className="btn btn-warning px-3 ml-4">
                                            <i className="fa fa-shopping-cart"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Producto 4*/}
                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./images/Galgerias/TodoRico.jpg' alt="Todo Rico Familiar"></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 className="card-title"><a href=' http://192.168.10.80:3000'>Todo Rico Familiar</a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 20 Opiniones</span>
                                </div>
                                <div className="card-footer d-flex justify-content-between">
                                    <p className='text-danger font-weight-bold'>$18.600</p>
                                    <form action=" http://192.168.10.80:3000">
                                        <button
                                            id="cart"
                                            type="button"
                                            className="btn btn-warning px-3 ml-4">
                                            <i className="fa fa-shopping-cart"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
export default Home
