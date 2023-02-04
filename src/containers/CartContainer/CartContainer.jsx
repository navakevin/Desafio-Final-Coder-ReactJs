import React from 'react'

import { useContext} from 'react'
import { Link } from 'react-router-dom';
import CartList from '../../components/CartList/CartList';
import { Shop } from '../../context/CartProvider';

function CartContainer() {

  const {products} = useContext(Shop);
 
  let sum = 0;
  let cant = 0;

  products.forEach((el)=>{
    sum+=el.price;
    cant+=el.cantidad;
  })

  let total = sum*cant;


  return (
    <>

      { products.length 
        
        ? 
          <>
            <CartList total={total}/>
          </>
         
        :  
          <div className='m-5'>
           <h3>Carrito vacio Regresa para comprar Productos</h3> 
            <Link to={"/"} className="btn btn-secondary text-ligth" style={{"textDecoration":"none"}}> Inicio </Link>
          </div> 
       }
    
    </>
  )
}

export default CartContainer