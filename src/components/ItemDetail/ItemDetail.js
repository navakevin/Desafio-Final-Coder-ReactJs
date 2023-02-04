
import { useState } from 'react'
import ItemCount from '../itemCount/ItemCount'
import { Link } from 'react-router-dom';
import { Shop } from '../../context/CartProvider';
import { useContext } from 'react';
import './styles.css';


function ItemDetail({data}) {
  const {addProduct} = useContext(Shop);
 const [countChange,setcountChange] = useState(true);

  const onAdd = (count) =>{

 
   setcountChange(false);
   addProduct({...data, cantidad : count});
   
  }



  return (
    <div className="cols-12 bg-dark text-ligth m-3 rounded">
    <div className="row justify-content-evenly">
    <img className="col-md-4 card-image-top p-5" src={data.image} alt="Captura xd"></img>

    <div className="col-md-4 mt-5 p-4">
      <h5 className="card-title">{data.title}</h5>
      <p className="card-text mt-5">{data.description}</p>  
      <p className="card-text my-5" style={{fontSize:"50px"}}>$ {data.price}</p>

      {

      countChange 

      ? <ItemCount onAdd={onAdd} stock={data.stock} initial={1} title={data.title}></ItemCount>

      : <>
        <Link to={"/cart"} className="btn btn-danger p-3 text-dark"> Terminar Compra </Link>
        <Link to={"/"} className="btn btn-secondary p-3 m-3 text-dark"> Regresar al menu </Link>
        </>
      
      } 

    </div>
    </div>
    
   
    </div>
  )
}

export default ItemDetail