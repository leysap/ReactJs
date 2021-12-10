import React from 'react'
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'
import { getProductsByCategories, getProducts } from '../../productos'
import { useParams } from 'react-router'
import { Loader } from '../Loader'
import "./style.scss"

const ItemListContainer = ({titulo}) => {

    const [product, setProduct] = useState([])
    const { categoryId } = useParams()
    console.log(categoryId)

    useEffect (() => {
        if(categoryId !== undefined){
            const list = getProductsByCategories(categoryId)
    
            list.then(response =>{
                setProduct(response)
            })
            .catch(reject => {
                console.log(reject)
            })
            
            return(() => {
              setProduct([])
            })

        }else{
            const list = getProducts()
    
            list.then(response =>{
                setProduct(response)
            })
              
            return(() => {
              setProduct([])
            })
        }
    }, [categoryId])

    return (
        <div className="container">
            <h2 className="titulo">{titulo}</h2>
            {product.length !== 0 ? 
            <div>
                <h2 className="titulo">{categoryId}</h2>
                <ItemList product={product}/>  
            </div> :
            <Loader/>
            }
            
        </div>
    )
}

export default ItemListContainer
