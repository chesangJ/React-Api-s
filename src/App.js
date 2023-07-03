

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RootLayout from './Layout/RootLayout';
import Login from './Login';
import Products from './Products';
import ProductDetails from './ProductDetails';
import Add from './Add Product';

function App() {
  return (
    <Router>
      <RootLayout>
      <Routes>
        
        <Route path="/Products" element={<Products />} />
        <Route path="/Add Product" element={< Add />} />
        <Route path="/products/:id" element={<ProductDetails/>}/>
        <Route path="/Login" element={<Login />} />
      </Routes>
      </RootLayout>
    </Router>
  );
}

export default App;