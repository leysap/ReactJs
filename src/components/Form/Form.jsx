import React from 'react'
import { db } from "../../services/firebase/firebase"
import { collection, addDoc, doc, writeBatch, Timestamp, getDoc } from 'firebase/firestore'
import { useState } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'

const Form = () => {
    const { productoCarrito, setproductoCarrito, total } = useContext(CartContext)
    const [loadingOrder, setLoadingOrder] = useState(false);
    let navigate = useNavigate();
    const [datos, setDatos] = useState({
        name: "",
        phone: "",
        address: "",
        email: ""
    })

    const handleForm = (event) => {

        setDatos({
            ...datos,
            [event.target.name]: event.target.value

        })
    }
    
    const arrayNumeros = ["0","1","2","3","4","5","6","7","8","9"]
    const handleOnKeyDown = (e) => {
        const isNumber = arrayNumeros.some(v=> v === e.key)

        if (isNumber) {
            e.preventDefault()
        } 
    }
    const arrayLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z",".",",", "*", "/"]

    const handleOnKey = (e) => {
        const isLetter = arrayLetters.some(v=> v === e.key.toLowerCase())

        if (isLetter) {
            e.preventDefault()
        } 
    }

    const mapProducts = productoCarrito.map((e) => {
        return { id: e.id, name: e.name, price: e.price, quantity: e.quantity, stock: e.stock }
    })


    const enviar = (e) => {
        e.preventDefault()
        setLoadingOrder(true);

        const objetoProducto = {
            buyer: { name: datos.name, phone: datos.phone, email: datos.email, address: datos.address },
            items: mapProducts,
            date: Timestamp.fromDate(new Date()),
            total: total()
        }

        const batch = writeBatch(db);
        const outOfStock = [];

        objetoProducto.items.forEach((prod) => {
            getDoc(doc(db, "items", prod.id)).then((documentSnapshot) => {
                if (documentSnapshot.data().stock >= prod.quantity) {
                    batch.update(doc(db, "items", documentSnapshot.id), {
                        stock: documentSnapshot.data().stock - prod.quantity
                    });
                } else {
                    outOfStock.push({ id: documentSnapshot.id, ...documentSnapshot.data() })
                }
            })
        })

        if (outOfStock.length === 0) {
            addDoc(collection(db, "orders"), objetoProducto).then(() => {
                batch.commit().then(() => {
                    setproductoCarrito([])
                    window.localStorage.removeItem('carrito')
                })
            })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    navigate('/dashboard');
                });
        }
    }
    return (
        <div>
            {!loadingOrder ?
                (<div className='container'>
                    <h2>COMPLETA CON TUS DATOS</h2>
                    <form onSubmit={enviar} >
                        <div className="mb-3">
                            <label className="form-label">Full Name</label>
                            <input
                                type="text"
                                onChange={handleForm}
                                className="form-control"
                                onKeyDown={handleOnKeyDown}
                                name="name" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Phone</label>
                            <input
                                type="text"
                                className="form-control"
                                onChange={handleForm}
                                name="phone" 
                                onKeyDown={handleOnKey}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Address</label>
                            <input
                                type="text"
                                className="form-control"
                                onChange={handleForm}
                                name="address" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input
                                type="email"
                                onChange={handleForm}
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                name="email"
                            />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <button
                            disabled={
                                productoCarrito?.length === 0 ||
                                datos.name === '' ||
                                datos.email === '' ||
                                datos.address === '' ||
                                datos.phone === ''
                            }
                            type='submit'
                            className="btn btn-primary">CONFIRMAR COMPRA 🙌</button>
                    </form>
                </div>) : (
                    <div className='container'>
                        <h1>
                            Estamos generando su orden 👌. Espere un momento... 
                        </h1>
                    </div>
                )}

        </div>
    )
}

export default Form
