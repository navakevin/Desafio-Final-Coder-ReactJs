import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import Loading from '../../components/Loading/Loading';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config';
function ItemDetailContainer() {

  const [product, setProduct] = useState({});
  const params = useParams()

  useEffect(() => {


    const getProduct = async () => {
      const docRef = doc(db, "products", params.detailId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const producDetail = {
          id: docSnap.id,
          ...docSnap.data()
        }
        setProduct(producDetail);
      } else {
        console.log("No such document!");
      }

    }

    getProduct();

  }, [params.detailId])

  const x = Object.keys(product)

  return (

    <>

      {x.length === 0 ? <Loading></Loading> : <ItemDetail data={product}></ItemDetail>}

    </>


  )
}

export default ItemDetailContainer