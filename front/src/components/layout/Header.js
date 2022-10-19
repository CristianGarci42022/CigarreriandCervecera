import React, { Fragment } from 'react'

const Header = () => {
    return (
        <Fragment>
            <nav className='navbar row'>
                <div className='col-12 col-md-3'>
                    <div className='navbar-brand'>
                        <img src='./images/Logo-Icono/LogoCigarreriandCerveceria.png' alt='Cigarrería y Cerveceía'></img>
                    </div>
                </div>

                <div className='col-12 col-md-6 mt-2 mt-md-0'>
                    <div className='input-group'>
                        <input
                            type="text"
                            id="search-field"
                            class="form-control"
                            placeholder='¿Que estás buscando?'></input>
                        <div class="input-group-append">
                            <button id="search-btn" class="btn">
                                <i class="fa fa-search fa-1x text-white" aria-hidden="true"></i>
                            </button>

                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                    <span><button className='btn' id="login_btn">Inicie Sesión</button></span>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <span class="ml-1 " id="cart_count">2</span>
                    <img  src="./images/Logo-Icono/carro3.png" aria-hidden="false"></img>
                    
                </div>
            </nav>

        </Fragment>
    )
}

export default Header