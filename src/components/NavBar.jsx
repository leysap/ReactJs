import React from 'react'
import "./style.scss"
import carrito from "./carrito-de-compras.png"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" id="nombre" href="/#">A U R O R A</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/#">Remeras</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Pantalones</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Abrigos</a>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        <div id="carrito-imagen">
                            <button id="btn-carrito"><img src={carrito} alt="carrito"></img></button>
                        </div>
                    </span>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
