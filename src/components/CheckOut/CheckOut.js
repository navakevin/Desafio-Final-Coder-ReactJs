import React from 'react'
import { generateOrder } from '../../services/generateOrder'
import { useState } from 'react'
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase/config';
import LoadingV2 from '../LoadingV2/LoadingV2';
import { doc, updateDoc } from "firebase/firestore";
import OrderData from '../ModalEndCart/OrderData';

//Componente que realiza la finalizacion de la compra
function CheckOut({ products, total, removeAll }) {

  //estado para definir el loader
  const [loader, setLoader] = useState(false);
  const [orderOk, setOrderOk] = useState(false);
  const [envio,setEnvio] = useState(true);
  const [data,setData] = useState({});
  //estado para capturar los datos del formulario
  const [datosF, setDatosF] = useState({
    nombre: '',
    apellido: '',
    email: '',
    email2: '',
    telefono: ''
  })

  //estado para validar errores en el formulario
  const [errors, setErrors] = useState({
    nombre: '',
    apellido: '',
    email: '',
    email2: '',
    telefono: ''
  })

  const handleInputChange = (e) => {
    setDatosF({
      ...datosF,
      [e.target.name]: e.target.value
    })

    setErrors({
      ...errors,
      [e.target.name]: ""
    });

  };

  const validateForm = () => {
    let newErrors = {};
    if (!datosF.nombre) {
      newErrors.nombre = "Nombre es requerido";
    }

    if (!datosF.apellido) {
      newErrors.apellido = "Apellido es requerido";
    }

    if (!datosF.email) {
      newErrors.email = "Email es requerido";

    } else if (!/\S+@\S+\.\S+/.test(datosF.email)) {
      newErrors.email = "Email no es valido";
    }

    if (!datosF.email2) {
      newErrors.email2 = "Confirmar email es requerido";

    } else if (datosF.email !== datosF.email2) {
      newErrors.email2 = "Emails no coinciden";

    }

    if (!datosF.telefono) {
      newErrors.telefono = "Telefono es requerido"
    } else if (!/^\d{2} \d{4} \d{4}$/.test(datosF.telefono)) {
      newErrors.telefono = "telefono es invalido"
    }


    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === "");
  };



  const enviarDatos = async (e) => {
    e.preventDefault()

    try {
      if (validateForm()) {

        setLoader(true)

        const order = generateOrder({
          nombre: datosF.nombre,
          email: datosF.email,
          telefono: datosF.telefono,
          cart: products,
          total: total
        })

        const docRef = await addDoc(collection(db, "orders"), order);
        setOrderOk(true)
        console.log(docRef);
        setData(docRef);
        setEnvio(false)
        

        for (const productCart of products) {
          const productRef = doc(db, "products", productCart.id);

          await updateDoc(productRef, {
            stock: productCart.stock - productCart.cantidad
          });
        }

      }

    } catch (error) {
      console.log(error)
    } finally {
      setLoader(false)
    }

  }

  return (
    <form className='container gap-2 text-ligth m-5 p-3' onSubmit={enviarDatos}>
      <div className="row col-4 gap-3">
          <label htmlFor="nombre">Nombre:</label>
          <input className='p-2' type="text" name='nombre' onChange={handleInputChange} value={datosF.nombre} />
          {errors.nombre && <p className='text-danger'>{errors.nombre}</p>}

          <label htmlFor="apellido">Apellido:</label>
          <input className='p-2' type="text" name='apellido' onChange={handleInputChange} value={datosF.apellido} />
          {errors.apellido && <p className='text-danger'>{errors.apellido}</p>}

          <label htmlFor="email">Email:</label>
          <input className='p-2' type="text" name='email' onChange={handleInputChange} value={datosF.email} />
          {errors.email && <p className='text-danger'>{errors.email}</p>}


          <label htmlFor="email2">Confirmar Email:</label>
          <input className='p-2' type="text" name='email2' onChange={handleInputChange} value={datosF.email2} />
          {errors.email2 && <p className='text-danger'>{errors.email2}</p>}

          <label htmlFor="telefono">Telefono: ej: "11 1234 5678" </label>
          <input className='p-2' type="text" name='telefono' onChange={handleInputChange} value={datosF.telefono} />
          {errors.telefono && <p className='text-danger'>{errors.telefono}</p>}
            {envio && <button type="submit" className="btn btn-danger mt-4">Enviar</button>}
      </div>
      

      {

        loader 

        ? <LoadingV2></LoadingV2>

        : <>
           
            { orderOk && <OrderData removeAll={removeAll} data={data} datosF={datosF}></OrderData>}
          </>

      }

    </form>
  )
}

export default CheckOut