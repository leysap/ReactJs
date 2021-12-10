import React from 'react'
import ItemCount from '../ItemCount'
import "./style.scss"

const ItemDetail = ({ item }) => {

    const onAdd = () => {
        console.log("Se agrego al carrito!")
    }

    return (
        <div className="Item card" >
            <div>
                <img src={item.img} className="card-img-top card-image" alt={item.name}></img>
            </div>
            <div className="item-card">
                <h4 className="card-title text-center">{item?.name}</h4>
                <p className="description-product">{item?.description}</p>
                <p className="card-text">Precio: ${item?.price}</p>
                <p className="card-text">Stock disponible: {item?.stock}</p>
                <ItemCount stock={item.stock} initial="1" onAdd={onAdd} />
            </div>
        </div>
    )
}

export default ItemDetail
