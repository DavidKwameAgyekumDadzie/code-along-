// import Header from "./components/Header";
// import Button from "./components/Button";
// import {Image} from "./components/Image";
// import Navbar from "./components/Navbar";
// import Practice from "./components/Practice";
import ProductList from "./components/ProductList";
import TaskManager from "./components/TaskManager";
// import Form from "./components/Form"
// import Spinner from "./components/Spinner";
import {BrowserRouter, Routes, Route} from "react-router-dom"

import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<ProductList />}/>
        <Route path="/task-manager" element={<TaskManager />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        
        
      </Routes>
    </BrowserRouter>
    
  );
  
};
export default App;