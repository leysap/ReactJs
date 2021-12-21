import React from 'react'
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Loader } from '../Loader'
import "./style.scss"
import { db } from "../../services/firebase/firebase"
import { collection, getDocs , query, where} from 'firebase/firestore'

const ItemListContainer = ({ titulo }) => {

    const [product, setProduct] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {

        if(!categoryId){

            getDocs(collection(db, "items")).then((querySnapshot) => {

                const products = querySnapshot.docs.map(doc => {

                    return { id: doc.id, ...doc.data()}
                })
                setProduct(products)
            }).catch((error) => {
                console.log("Error searching items", error)
            })
            
        }else {
            getDocs(query(collection(db, "items"), where("category", "==", categoryId))).then((querySnapshot) => {

                const products = querySnapshot.docs.map(doc => {

                    return { id: doc.id, ...doc.data()}
                })
                setProduct(products)
            }).catch((error) => {
                console.log("Error searching items", error)
            })
        }

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
