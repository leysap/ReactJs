import React from 'react'
import "./style.scss"
import CartWidget from '../CartWidget'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getCategories } from '../../productos'

const NavBar = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {

        getCategories().then(categories => {
            setCategories(categories)
            
        })
        .catch(err=> {
            console.log(err)
        })

    }, [])

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" id="nombre" >A U R O R A</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {categories.map(cat =>
                            <li className="nav-item" key={cat.id}>
                                <Link className="nav-link" key={cat.id} to={`/category/${cat.id}`}> {cat.description} </Link>
                            </li>)} 
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

