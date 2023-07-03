
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`)
        const result = await response.json();
        setProduct(result);
      } catch (error) {
        console.log(error.message);
      }
    };

    getProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>

<img src={product.thumbnail} alt={product.title} className="more"/>
    <h1>Name:{product.title}</h1>
      <h1>Description:{product.description}</h1>
      <h1>Price:{product.price}</h1>
      <h1>Discount:{product.discountPercentage}</h1>
      
    </div>
  );
};

export default ProductDetails;
