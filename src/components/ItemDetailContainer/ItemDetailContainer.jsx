import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from "react-router-dom"
import { Loader } from '../Loader/Loader'
import { getDoc, doc } from "firebase/firestore"
import { db } from '../../services/firebase/firebase'


const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const { id } = useParams()
   
    useEffect(() => {

        getDoc(doc(db, "items" , id)).then((querySnapshot) => {

            const product = { id: querySnapshot.id , ...querySnapshot.data()}
            setItem(product)

        }).catch((error) => {

            console.log("Error searching Item", error)
            
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
