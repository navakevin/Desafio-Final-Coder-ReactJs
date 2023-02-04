import React from 'react'
import {useNavigate} from "react-router-dom";
function Item(produc) {
const navigate = useNavigate()

  return (
    <div className="card bg-dark text-ligth m-3 misCards" onClick={()=> navigate(`/detail/${produc.prod.id}`)} style={{ width: "25rem"}}>
              <img className="card-img-top p-5" src={produc.prod.image} alt="captura"></img>
              <div className="card-body">
                <h5 className="card-title">{produc.prod.title}</h5>
                <p className="card-text">$ {produc.prod.price}</p>
              </div>
    </div>
  )
}

export default Item