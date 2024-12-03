import { useState } from "react"

const useCart = () => {

    const [cart, setCart] = useState([])
    // modal
    const [open, setOpen] = useState(false)
  
    const handleOpen = ()  =>{
      setOpen(true)
    }
    const handleClose = ()=> {
      setOpen(false)
    }
  
    const isEmpty = cart.length === 0
  
    const addToCart = (product) => {
      //comprobar si ya existe 
      const itemExists = cart.findIndex((item) => item.id == product.id)
  
      if (itemExists == -1) {
        product.quantity = 1
        setCart([...cart, product])
      }else{
        //si existe, incrementar cantidad
        const updatedCart = [...cart]
        updatedCart[itemExists].quantity++;
        setCart(updatedCart)
      }
    }
  
    const removeItem = (product) =>{
      const filteredCart = cart.filter((item)=> item.id !== product.id)
      setCart(filteredCart)
    }
  
    const incrementQuantity = (product) =>{
      const itemExists = cart.findIndex((item) => item.id == product.id)
      itemExists !== -1 && setCart([...cart], [...cart][itemExists].quantity++)
    }
    const decrementQuantity = (product) =>{
      const itemExists = cart.findIndex((item) => item.id == product.id)
      itemExists !== -1 && setCart([...cart], [...cart][itemExists].quantity--)
  
      if (product.quantity === 0) {
        removeItem(product)
      }
    }
  
    return{
        cart, 
        setCart,
        open, 
        handleOpen, 
        handleClose, 
        isEmpty, 
        addToCart,
        removeItem,
        incrementQuantity,
        decrementQuantity,
    }
}
export default useCart