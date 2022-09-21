import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
// import Login from './pages/Login';\
// import Login from './pages/Login';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Register from "./pages/Register";
import Footer from "./pages/Footer";
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";

function App() {
  return (

      <>
        <Navbar />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        {/* <Login />  */}
        

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/product' element={<Product />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Footer' element={<Footer />} />
        </Routes>
        <ToastContainer />
        
      </>
      


      );
}

      export default App;
