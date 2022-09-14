import Navbar from "./components/Navbar";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Login from './pages/Login';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Register from "./pages/Register";
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>      
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
      </Routes>
    </>

  );
}

export default App;
