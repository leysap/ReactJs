import React from 'react'
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Loader } from '../Loader/Loader'
import "./style.scss"
import { getProducts } from "../../services/firebase/firebase"

const ItemListContainer = ({ titulo }) => {

    const [product, setProduct] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {

        getProducts("category" , "==", categoryId).then(products => {

            setProduct(products)

        }).catch(error => {

            console.log(error)
        })


        return (() => {
            setProduct([])
        })

    }, [categoryId])

    return (
        <div >
            {product.length !== 0 ? 
                <div className='container'>
                    {categoryId===undefined ? 
                    <h2 className="titulo">{titulo}</h2> :
                    <h2 className="titulo">{categoryId.toUpperCase()}</h2> }
                    <ItemList product={product} />
                </div> :
                <Loader />
            }

        </div>
    )
}

export default ItemListContainer
