import React from 'react'
import Item from '../Item/Item'

function ItemList(data) {

  return (
    <div className='row justify-content-center'>
        
    {data.data.map(el=><Item prod={el} key={el.id}></Item>)}

    </div>
  )
}

export default ItemList