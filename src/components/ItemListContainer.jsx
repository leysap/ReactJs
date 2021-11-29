import React from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'
import { useState, useEffect } from 'react'
import { getProducts } from '../productos'


const ItemListContainer = ({greeting,mensaje}) => {
  
    const onAdd = () => {
        console.log("Se agrego al carrito!" )
    }

    const [product, setProduct] = useState([])

    useEffect (() => {

        const list = getProducts()

        list.then(response =>{
            setProduct(response)
        })
          
        return(() => {
          setProduct([])
        })

    }, [])

    return (
        <div className="container">
            <h1 className="titulo">{greeting}</h1>
            <p>{mensaje}</p>
            <ItemCount stock="10" initial="1" onAdd={onAdd}/>
            <ItemList product={product}/>
        </div>
    )
}

export default ItemListContainer
