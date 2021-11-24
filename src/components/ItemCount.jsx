import React from 'react'
import { useState } from 'react'

const ItemCount = ({ stock, initial, onAdd}) => {

    const [contador, setContador] = useState(1)

    const sumar = () => {
        contador < stock ? setContador(contador + 1) : setContador(contador)
        
    }

    const restar = () => {
        contador > initial ? setContador(contador - 1) : setContador(contador)
    }
    console.log("Cantidad: " + contador)
    return (
        
        <div className="row d-md-flex justify-content-md-center">
            <div className="col-sm-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Remera Amelia</h5>
                        <p className="card-text">{contador}</p>
                        <div className="d-grid gap-3 d-md-flex justify-content-md-center">
                            <button className="btn btn-secondary" onClick={() => sumar()}><i className="fas fa-plus"></i></button>
                            <button className="btn btn-secondary" onClick={() => restar()} ><i className="fas fa-minus"></i></button>
                        </div>
                        <div className="btn-carrito d-grid gap-2">
                            <button className="btn btn-outline-primary" onClick={() => onAdd()}type="button">Agregar al carrito</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCount
