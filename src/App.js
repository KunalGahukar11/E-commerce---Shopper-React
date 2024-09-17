import './App.css';
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShoppingCategory from './Pages/ShoppingCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignUp';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element = {<Shop/>}/>
        <Route path='/mens' element = {<ShoppingCategory/>} category = "men"/>
        <Route path='/womens' element = {<ShoppingCategory/>} category = "women"/>
        <Route path='/kids' element = {<ShoppingCategory/>} category = "kid"/>
        <Route path='/product' element = {<Product/>}>
          <Route path=':productId' element = {<Product/>}/>
        </Route>
        <Route path='/cart' element = {<Cart/>}/>
        <Route path='/login' element = {<LoginSignUp/>}/>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
