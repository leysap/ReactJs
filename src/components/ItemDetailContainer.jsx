import React from 'react'
import { useState, useEffect } from 'react'
import { getProductById } from '../productos'
import ItemDetail from './ItemDetail/ItemDetail'
import {useParams} from "react-router-dom"
import { Loader } from './Loader'

const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const { id } = useParams()
    
    console.log(id)

    useEffect(() => {

        const list = getProductById(id)

        list.then(response => {
            setItem(response)
        })

        return (() => {
            setItem([])
        })

    }, [id])

    return (

        <div className="container">
            {item.length !==0 ? 
            <ItemDetail item={item}/> : 
            <Loader/>
            }
        </div>

    )
}

export default ItemDetailContainer
