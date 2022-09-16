import Navbar from "./components/Navbar";
import "./App.css";
import Product from "./pages/Product";
// import Login from './pages/Login';
import Contact from './pages/Contact';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>      
      <Navbar />
      {/* <Login />  */}
      <Routes>
        {/* <Route path='/' element={<Home/>} /> */}
        {/* <Route path='/about' element={<About/>} /> */}
        <Route path='/product' element={<Product/>} />
        <Route path='/contact' element={<Contact/>} />
        {/* <Route path='/cart' element={<Cart/>} /> */}
      </Routes>
    </>
    

  );
}

export default App;
