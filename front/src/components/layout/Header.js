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

                <div className="col-12 col-md-6 mt-2 mt-md-0">
					<div className="input-group">
						<input
							type="text"
							id="search_field"
							className="form-control"
							placeholder="Que desea buscar..."
						/>
						<div className="input-group-append">
							<button id="search_btn" className="btn">
								<i className="fa fa-search"></i>
							</button>
						</div>
					</div>
				</div>
                <div className="col-12 col-md-3 mt-4 mt-md-0 text-center text-white ">
                <span className="ml-1 " id="cart_count">2</span>
                    <img  src="./images/Logo-Icono/carro3.png" aria-hidden="false"></img>
                
                    &nbsp; &nbsp; &nbsp;&nbsp;
                    <button className="btn btn-success px-4 text-white login-header-btn float-right">Iniciar de sesión</button>
                </div>
            </nav>

        </Fragment>
    )
}
export default Header