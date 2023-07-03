// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const ProductDetails=()=>{
//     const [product,setProduct]=useState({});
//     const{productId}=useParams();
     
//     useEffect(()=>{
//         (async ()=>{
//             await getProduct()
//         })();
//     },[productId]);

// const getProduct=async()=>{
//     try{
//         const response =await fetch(`https://dummyjson.com/products/${productId}`)
//         const result=await response.json();
//         setProduct(result.product);
//     }catch(error){
//         console.log(error.message)
//     }
// };console.log({product})
// return(
//     <div>
//         <h1>{product.title}</h1>
//         <h1>{product.description}</h1>
//     </div>
// )
// };
// export default ProductDetails

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
        setProduct(result.id);
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
      <h1>{product.title}</h1>
      <h1>{product.description}</h1>
      <h1>{product.thumbnail}</h1>
    </div>
  );
};

export default ProductDetails;
