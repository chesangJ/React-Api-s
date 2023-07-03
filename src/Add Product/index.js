// import React, { useState, useEffect } from "react";



import React, { useState, useEffect } from "react";

const Add = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    addProduct();
  }, []);

  const addProduct = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/products/add");
      const result = await response.json();
      setProduct(result.product);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log({ product });

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="product">
      <div>
        <h2>Add Product</h2>
        <button onClick={addProduct}>Add</button>
      </div>

      {product && (
        <div>
          <h3>Product Details:</h3>
          <p>Name: {product.title}</p>
          <p>Price: {product.price}</p>
          <p>Description: {product.description}</p>
        </div>
      )}
    </div>
  );
};

export default Add;
