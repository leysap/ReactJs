import React from 'react'
import { useState } from 'react'


const ItemCount = ({ stock, initial, onAdd}) => {

    const [contador, setContador] = useState(0)

    const sumar = () => {
        contador < stock ? setContador(contador + 1) : setContador(contador)
        
    }

    const restar = () => {
        contador > initial ? setContador(contador - 1) : setContador(contador)
    }

    return (
        
        <div className="row d-md-flex justify-content-md-center">
            <div className="col">
                <div className="card">
                    <div className="card-body">
                        <div className="d-grid gap-3 d-md-flex justify-content-md-center">
                            <button className="btn btn-secondary" onClick={() => sumar()}><i className="fas fa-plus"></i></button>
                            <p className="card-text">{contador}</p>
                            <button className="btn btn-secondary" onClick={() => restar()} ><i className="fas fa-minus"></i></button>
                        </div>
                        <div className="btn-carrito d-grid gap-2">
                            <button className="btn btn-outline-primary" onClick={() => onAdd(contador)}type="button">Agregar al carrito</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCount
