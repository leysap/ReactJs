import React from 'react'
import { CartContext } from './Context/CartContext'
import { useContext } from 'react'

const CartWidget = () => {

    const {countProducts} = useContext(CartContext)

    return (
        <div id="carrito-imagen">
            
            <button id="btn-carrito"><img src={"../photos/carrito-de-compras.png"} alt="carrito"></img> {countProducts()} </button>

        </div>
    )
}

export default CartWidget
