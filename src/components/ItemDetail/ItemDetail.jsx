import React from 'react'
import ItemCount from '../ItemCount'
import "./style.scss"
import { useState } from 'react'
import { Link } from 'react-router-dom'


const ItemDetail = ({ item }) => {
    
    const [productosCarrito, setproductosCarrito] = useState([]) 

    const onAdd = (contador) => {
        
        setproductosCarrito(contador)
        console.log("Se agrego al carrito " + contador)
    }


    return (
        <div className="Item card" >
            <div>
                <img src={item?.img} className="card-img-top card-image" alt={item?.name}></img>
            </div>
            <div className="item-card">
                <h4 className="card-title text-center">{item?.name}</h4>
                <p className="card-text">Precio: ${item?.price}</p>
                <p className="description-product">{item?.description}</p>
                <p className="card-text">Stock disponible: {item?.stock}</p>
                {productosCarrito > 0 ? <Link to="/cart" className="finish-button btn btn-outline-primary ">Finalizar Compra</Link> : <ItemCount stock={item?.stock} initial="1" onAdd={onAdd}/>}
            </div>
        </div>
    )
}

export default ItemDetail
