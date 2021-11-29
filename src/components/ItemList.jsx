import React from 'react'
import Item from './Item/Item'

const ItemList = ({ product }) => {
    console.log(product)

    return (
        <div className="ListGroup container">
            <div className="row">
                <div className="d-flex justify-content-around">
                {product.map( p =>  
                    <Item key={p.id} product={p} />
                )}
                </div>
            </div>
        </div>
    )
}

export default ItemList
