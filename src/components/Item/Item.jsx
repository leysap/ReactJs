import React from 'react'
import "./style.scss"
import { Link } from "react-router-dom"


const Item = ({ product }) => {

    return (
        <div className="card div-card " >
            <img src={product.img} className="img-fluid card-img-top card-image" alt={product.name}></img>
            <h4 className="card-title text-center">{product.name}</h4>
            <p className="card-text">Precio: ${product.price}</p>
            <p className="card-text">{product.stock === 0 ? "NO HAY STOCK" : `Stock disponible: ${product.stock}`}</p>
            {product.stock === 0 ? <button to={`/item/${product.id}`}className=" btn btn-secondary boton-detalle" disabled>Ver producto</button> : <Link to={`/item/${product.id}`}className="btn btn-secondary boton-detalle">Ver producto</Link> }
            
        </div>
    )
}
export default Item
