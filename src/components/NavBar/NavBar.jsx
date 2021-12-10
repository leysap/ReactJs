import React from 'react'
import "./style.scss"
import CartWidget from '../CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" id="nombre" >A U R O R A</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/category/Remeras" className="nav-link active" aria-current="page" >Remeras</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/category/Pantalones" className="nav-link">Pantalones</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/category/Shorts" className="nav-link" >Shorts</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/category/Abrigos" className="nav-link" >Abrigos</Link>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        <CartWidget />
                    </span>
                </div>
            </div>
        </nav>
    )
}

export default NavBar

