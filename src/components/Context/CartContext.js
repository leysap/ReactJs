import React from "react"
import  {useState}  from "react"

export const CartContext = React.createContext()

const CartContextProvider = ({ children }) => {

    const [productoCarrito, setproductoCarrito] = useState([]) 

    const addItem = (item,quantity) => {

        const flag = isInCart(item.id)
        console.log(flag);
        if(flag){
            let productoRepetido = productoCarrito.find (elemento => elemento.id === item.id);
            productoRepetido.quantity += quantity; 
            productoRepetido.price *= productoRepetido.quantity 
            let cartSinRepetido = productoCarrito.filter (elemento => elemento.id !== item.id);     
            setproductoCarrito([...cartSinRepetido, productoRepetido]);
        }else {
            const product = {id: item.id, name: item.name,description: item.description, price: item.price, img: item.img , quantity: quantity}
            product.price *= product.quantity
            setproductoCarrito([...productoCarrito,product])  
        }
    }   
    
    const removeIdem = (itemId) => {

        let productoAborrar = productoCarrito.find (elemento => elemento.id === itemId)
        console.log(productoAborrar)
    
        let borrarDelArray = productoCarrito.filter(elemento => elemento.id !== itemId)
        console.log(borrarDelArray)
        setproductoCarrito(borrarDelArray)
        
    } 

    const countProducts = () => {
        let count= 0
        productoCarrito.forEach(prod => {
            count = count + prod.quantity
        })
        return count
    }
    
    const total = () => {

       let total= productoCarrito.reduce((a,i)=>a+i.price,0)
       return total
       
    }

    const isInCart = (id) => {
        return productoCarrito.some(p=> p.id === id)
       
    }

    const clear = () => {
        setproductoCarrito([])
    }

    
    
    return (
        <CartContext.Provider value={{productoCarrito,clear, removeIdem,total,isInCart,countProducts, setproductoCarrito, addItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider

