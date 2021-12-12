import React from 'react'
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'
import { getProducts } from '../../productos'
import { useParams } from 'react-router'
import { Loader } from '../Loader'
import "./style.scss"


const ItemListContainer = ({ titulo }) => {

    const [product, setProduct] = useState([])
    const { categoryId } = useParams()
    console.log(categoryId)


    useEffect(() => {

        const list = getProducts(categoryId)

        list.then(response => {
            setProduct(response)
        })
        .catch(err => {
            console.log(err)
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
