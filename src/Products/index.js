import React ,{useState,useEffect}from "react";
import './style.css'
import { Link } from "react-router-dom";


const Products=()=>{

const [products,setProducts]=useState([]);
const[loading,setLoading]=useState(false)
useEffect( () =>{
    (async()=>{
        await getProducts()
    })();
    
    },[]);

const getProducts=async ()=>{

    try{
        setLoading(true)
    const response=await fetch('https://dummyjson.com/products')
    const result=await response.json();
    setProducts(result.products);
    setLoading(false);
}
catch(error){
    console.log(error.message)
}
};
console.log({products});
if(loading){
    return <p>Loading...</p>
}
    return(
        
        <div className="product"> 
        
       <button> <Link to="/Add Product">Add </Link></button> 

{products.map(item=>(
    <Link to={`./product/${item.id}`}  key={item.id}>
    <div className="id"  >
        <img src={item.thumbnail} alt={item.title} className="image"/>
        <h3 className="title">{item.title} </h3>
        <h3 className="price"> Price {item.price}</h3>
        <h3 className="discount">Discount {item.discountPercentage}</h3>

    </div>
    </Link>
    
))}
<br/>
<br/>

      
        </div> 
        
    )
};

export default Products