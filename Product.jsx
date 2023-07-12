import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useEffect(false);
    
    useEffect(()=>{
        const getProduct = async()
        getProduct();

    }, [input]);
  return (
    <div>
      
    </div>
  )
}

export default Product
