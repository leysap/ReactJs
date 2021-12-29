import React from "react"
import  {useState}  from "react"

export const CartContext = React.createContext()

const CartContextProvider = ({ children }) => {

    const fromLocal = JSON.parse(localStorage.getItem("carrito")) || []
    const [productoCarrito, setproductoCarrito] = useState(fromLocal) 
  
    //FUNCIÓN PARA AGREGAR AL CARRITO TOMANDO EN CUENTA: SI EL PRODUCTO INGRESA POR PRIMERA VEZ O NO (RECONOCIÉNDOLO POR SU ID), EN ESE CASO, SE SUMA LA CANTIDAD INGRESADA CON EL EXISTENTE EN EL CARRITO, SE MULTIPLICA EL PRECIO POR LA CANTIDAD , Y VA RESTANDO EL STOCK. LUEGO SE HACE UN FILTRO ELIMINANDO ESE PRODUCTO REPETIDO Y SETEANDO EL PRODUCTO ACTUALIZADO AL HOOK-ARRAY//
    const addItem = (item,quantity) => {

        const flag = isInCart(item.id)

        if(quantity > 0 ){
            if(flag){
                let productoRepetido = productoCarrito.find (elemento => elemento.id === item.id);
        
                if(quantity <= productoRepetido.stock){
                // productoRepetido.stock = productoRepetido.stock -= quantity
                    productoRepetido.quantity += quantity; 
                    productoRepetido.price *= productoRepetido.quantity 

                    let cartSinRepetido = productoCarrito.filter (elemento => elemento.id !== item.id);
                    let array= JSON.stringify([...cartSinRepetido, productoRepetido])
                    window.localStorage.setItem("carrito", array)

                    setproductoCarrito([...cartSinRepetido, productoRepetido]);
                    window.alert(`Se agrego al carrito ${quantity}`)

                }else{
                    window.alert(`INGRESASTE MAS DE LO PERMITIDO`)
                }

            }else {
                const product = {id: item.id, name: item.name,description: item.description, price: item.price,stock: item.stock , quantity: quantity}
                console.log(product.stock)
                // product.stock -= quantity
       
                window.alert(`Se agrego al carrito ${product.name}, cantidad: ${quantity} `)
                let array= JSON.stringify([...productoCarrito, product])
                window.localStorage.setItem("carrito", array)
        
                product.price *= product.quantity
                setproductoCarrito([...productoCarrito,product])  
            }
        }
    }   
    
    //FUNCIÓN PARA ELIMINAR UN PRODUCTO, RECONOCIÉNDOLO POR SU ID, Y BORRÁNDOLO DEL CARRITO//
    const removeIdem = (itemId) => {

        productoCarrito.find (elemento => elemento.id === itemId)
        let borrarDelArray = productoCarrito.filter(elemento => elemento.id !== itemId)
        
        let array= JSON.stringify(borrarDelArray)
        window.localStorage.setItem("carrito", array)


        setproductoCarrito(borrarDelArray)
        
    } 

    //FUNCIÓN PARA CONTAR LA CANTIDAD DE PRODUCTOS AGREGADOS EN EL CARRITO//
    const countProducts = () => {
        let count= 0
        productoCarrito.forEach(prod => {
            count = count + prod.quantity
        })
        return count
    }
    
    //FUNCIÓN PARA SUMAR LOS PRECIOS DE LOS PRODUCTOS AGREGADOS AL CARRITO Y SUMARLOS PARA SACAR SU TOTAL//
    const total = () => {

       let total= productoCarrito.reduce((a,i)=>a+i.price,0)
       return total
       
    }

    //FUNCIÓN PARA RECONOCER POR SU ID, SI EL PRODUCTO INGRESADO EXISTE EN EL CARRITO O NO //
    const isInCart = (id) => {
        return productoCarrito.some(p=> p.id === id)
       
    }

    //FUNCIÓN PARA BORRAR TODO LO QUE HAY DENTRO DEL ARRAY-HOOK //
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

