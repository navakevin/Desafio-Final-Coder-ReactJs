import React, { useState } from "react";
import "./styles.css";
function ItemCount({stock,initial,onAdd,title}) {


  const [count, setCount] = useState(initial);
  const onActive = (e) => {
  
    if (e.target.innerHTML==='+' && count >= initial && count < stock) {
      setCount(count + 1);
    }

    if (e.target.innerHTML==='-' && count > initial) {
      setCount(count - 1);
    }

  };


  return (
    <div className="miCard p-3 rounded">
      <p>{title}</p>
      <div className="control">
        
        <div onClick={onActive} className="sum">+</div>
        <div className="count">{count}</div>
        <div onClick={onActive} className="res">-</div>
      </div>

      <button onClick={()=> onAdd(count)} className="add mt-3">Comprar</button>
    </div>
  );
}

export default ItemCount;
