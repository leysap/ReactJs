import React from 'react'
import Item from '../Item/Item'
import "./style.scss"

const ItemList = ({ product }) => {
    console.log(product)

    return (
        <div className="container">
            <div className="row ListGroup">
                <div className="d-flex flex-wrap justify-content-around">
                {product.map( p =>  
                    <Item key={p.id} product={p} />
                )}
                </div>
            </div>
        </div>
    )
}

export default ItemList
