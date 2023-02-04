import React from 'react'
import './styles.css'

function OrderData({removeAll,data,datosF}) {

  console.log(data)

  return (

        <>

            <div className='border rounded my-5'>
              <h5 className='p-3 border-bottom'>Datos de la orden:</h5>
              <p className="p-3 bg-dark orderinfo">Nombre: {datosF.nombre}</p>
              <p className='p-3 bg-dark orderinfo'>Apellido: {datosF.apellido}</p>
              <p className='p-3 bg-dark orderinfo'>Email: {datosF.email}</p>
              <p className='p-3 bg-dark orderinfo'>Telefono: {datosF.telefono}</p>
              <p className="p-3 bg-dark orderinfo">Id de la orden: {data.id}</p>
            
            </div>
           
          <button className='btn btn-danger' onClick={removeAll}>Aceptar y Finalizar.</button>

        </>
  )
}

export default OrderData