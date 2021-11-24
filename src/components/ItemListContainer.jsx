import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = ({greeting,mensaje}) => {
    
    const onAdd = () => {
        console.log("Se agrego al carrito!" )
    }

    return (
        <div className="container">
            <h1 className="titulo">{greeting}</h1>
            <p>{mensaje}</p>
            <ItemCount stock="10" initial="1" onAdd={onAdd}/>
        </div>
    )
}

export default ItemListContainer
