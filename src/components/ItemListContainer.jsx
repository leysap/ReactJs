import React from 'react'

const ItemListContainer = ({greeting,mensaje}) => {
    
    return (
        <div className="container">
            <h1 className="titulo">{greeting}</h1>
            <p>{mensaje}</p>
        </div>
    )
}

export default ItemListContainer
