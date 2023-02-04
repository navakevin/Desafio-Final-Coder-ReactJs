import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
export const Shop = createContext()



//High Order Component 
function CartProvider({children}) {

    const [products,setProducts] = useState([]);

    const addProduct = (product) =>{
        const isSome = isSomeProduct(product.id);
        if(isSome){
            const prId = products.find(el=>el.id === product.id);
            prId.cantidad += product.cantidad
            setProducts([...products])
        }else{
            setProducts([...products , product])
        }
    }
    const countCart = () =>{
        let can = 0;
        products.forEach((el)=>{
            can+=el.cantidad;
        })
        return can;
    }

    const isSomeProduct=(id)=>{
        return products.some(el=> el.id === id)
    }

    const removeProduct =(id)=>{
        const filterProducts = products.filter(el => el.id !== id);
        setProducts(filterProducts);
    }
    const removeAll =()=>{
        setProducts([]);
    }
    

  return (
    <Shop.Provider value = {{products, addProduct, countCart, removeProduct, removeAll}}>

        {children}

    </Shop.Provider>
  )
}

export default CartProvider