import React from "react"
import  {useState}  from "react"


export const CartContext = React.createContext()

const CartContextProvider = ({ children }) => {

    const fromLocalStorage = JSON.parse(localStorage.getItem("carrito")) || []
    const [productoCarrito, setproductoCarrito] = useState(fromLocalStorage) 
  
    const addItem = (item,quantity) => {

        const flag = isInCart(item.id)

        if(quantity > 0 ){
            if(flag){
                let productoRepetido = productoCarrito.find (elemento => elemento.id === item.id);
               
                if(productoRepetido.quantity + quantity <= productoRepetido.stock){
                    productoRepetido.quantity += quantity; 
                    productoRepetido.price *= productoRepetido.quantity 

                    let cartSinRepetido = productoCarrito.filter (elemento => elemento.id !== item.id);
                    let array= JSON.stringify([...cartSinRepetido, productoRepetido])
                    window.localStorage.setItem("carrito", array)

                    setproductoCarrito([...cartSinRepetido, productoRepetido]);

                }else{
                    return false
                    
                }

            }else {
                const product = {id: item.id, name: item.name,description: item.description, price: item.price,stock: item.stock , quantity: quantity}

                let array= JSON.stringify([...productoCarrito, product])
                window.localStorage.setItem("carrito", array)
        
                product.price *= product.quantity
                setproductoCarrito([...productoCarrito,product])  
            }
        }
    }   
    
    const removeIdem = (itemId) => {

        productoCarrito.find (elemento => elemento.id === itemId)
        let borrarDelArray = productoCarrito.filter(elemento => elemento.id !== itemId)
        
        let array= JSON.stringify(borrarDelArray)
        window.localStorage.setItem("carrito", array)

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
        window.localStorage.removeItem('carrito')
    }

    return (
        <CartContext.Provider value={{productoCarrito,setproductoCarrito,clear ,removeIdem,total,isInCart,countProducts, addItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider

