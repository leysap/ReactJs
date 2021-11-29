import React from 'react'
import "./style.scss"


const Item = ({ product }) => {

    return (
        <div className="card text-center" >
            <img src={product.img} className="card-img-top card-image" alt={product.name}></img>
            <h4 className="card-title text-center">{product.name}</h4>
            <p className="card-text">Precio: ${product.price}</p>
            <a href="/#" className="btn btn-primary  boton-detalle">Ver producto</a>
        </div>
    )
}

export default Item
