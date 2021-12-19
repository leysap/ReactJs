import React from "react"
import  {useState}  from "react"

export const CartContext = React.createContext()

const CartContextProvider = ({ children }) => {

    const [productoCarrito, setproductoCarrito] = useState([]) 
  
    const addItem = (item,quantity) => {

        const flag = isInCart(item.id)

        if(flag){
            let productoRepetido = productoCarrito.find (elemento => elemento.id === item.id);
            console.log(productoRepetido.stock)
            
            if(quantity <= productoRepetido.stock){
                productoRepetido.stock = productoRepetido.stock -= quantity
                productoRepetido.quantity += quantity; 
                productoRepetido.price *= productoRepetido.quantity 
                let cartSinRepetido = productoCarrito.filter (elemento => elemento.id !== item.id); 
                setproductoCarrito([...cartSinRepetido, productoRepetido]);
                window.alert(`Se agrego al carrito ${quantity}`)

            }else{
                window.alert(`INGRESASTE MAS PRODUCTOS DEL PERMITIDO`)
            }

        }else {
            const product = {id: item.id, name: item.name,description: item.description, price: item.price,stock: item.stock , quantity: quantity}
            product.stock -= quantity

            window.alert(`Se agrego al carrito ${product.name}, cantidad: ${quantity} `)
            
            product.price *= product.quantity
            setproductoCarrito([...productoCarrito,product])  
        }
    }   
    
    const removeIdem = (itemId) => {

        productoCarrito.find (elemento => elemento.id === itemId)
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
        // setStockproduct(0)
    }

    return (
        <CartContext.Provider value={{productoCarrito,clear ,removeIdem,total,isInCart,countProducts, addItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider

