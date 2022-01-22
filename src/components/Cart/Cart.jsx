import React from 'react'
import { CartContext } from '../Context/CartContext'
import { useContext } from 'react'
import { Link} from 'react-router-dom'
import "./style.scss"


const Cart = () => {
    const { productoCarrito,clear, removeIdem, total } = useContext(CartContext)
    
    return (
        <div className="container">
            {productoCarrito.length === 0 ?
                <div>
                    <h1 className='tituloCarrito'>EL CARRITO ESTA VACÍO</h1><br />
                    <Link className="boton d-grid gap-2 col-6 mx-auto  btn btn-secondary" to="/">VOLVER AL HOME </Link>
                </div> :
                <div>
                    <h1>CARRITO</h1>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Producto</th>
                                <th scope="col">Description</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio</th>
                                <th scope="col"><button className="btn btn-secondary" onClick={() => clear()}>VACIAR</button></th>
                            </tr>
                        </thead>
                        <tbody>
                            {productoCarrito.map(producto => {
                                return <tr key={producto.id}>
                                    <td > {producto.name}</td>
                                    <td> {producto.description} </td>
                                    <td className='text-center'> {producto.quantity} </td>
                                    <td> $ {producto.price} </td>
                                    <td><button className='align-items-center btn btn-secondary' onClick={() => removeIdem(producto.id)}>Eliminar</button></td>
                                </tr>
                            })}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th colSpan="3">TOTAL</th>
                                <th>$  {total()}</th>
                            </tr>
                        </tfoot>
                    </table>
                    <Link to="/form" className='align-items-center btn btn-primary'>TERMINAR LA COMPRA</Link>
                </div>
            }
        </div>
    )
}

export default Cart
