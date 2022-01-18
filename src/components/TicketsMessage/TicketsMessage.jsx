import React from 'react'
import "./style.scss"

const TicketsMessage = ({ord}) => {
    return (
        <div className='container container-ticket'>
            <h2 id='id-order'>
                Id de la compra: {ord.id}
            </h2>
            <h2 className='size'>Cliente: {ord.buyer.name.toUpperCase()}</h2>
            <h2 className='size'>Dirección: {ord.buyer.address}</h2>
            <h2 className='size'>Email: {ord.buyer.email}</h2>
            <h2 className='size'>Teléfono: {ord.buyer.phone}</h2>
            <h2 className='size'>Fecha: {ord.date}</h2>
            <h2 className='size'>
                Nombre de los productos:{' '}
                {ord.items.map((prod, index) => (
                    <ul key={index}>
                        <li>
                            {prod.name} ${prod.price} x {prod.quantity}
                        </li>
                    </ul>
                ))}
            </h2>
            <h2 className='size'>Total: ${ord.total}</h2>
        </div>
    )
}

export default TicketsMessage
