import React, {Suspense, lazy, useEffect} from "react"
import './App.css';
import SearchIcon from '@mui/icons-material/Search';
import { LinearProgress } from '@mui/material';



import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Link
  
} from "react-router-dom";


const Home = lazy(() => import("../src/pages/home/Home") )
const Login = lazy(() => import("../src/pages/login/Login") )
const Products = lazy(() => import("./pages/products/Products") )
const ProductUn = lazy(() => import("./pages/product-un/ProductUn"))
const Checkout = lazy(() => import("./pages/checkout/Checkout"))
const Register = lazy(() => import("./pages/register/Register"))
const Cart = lazy(() => import("./pages/cart/Cart"))
const Profile = lazy(() => import("../src/pages/profile/Profile") )
const NotFound = lazy(() => import("../src/pages/not-found/Not-Found") )


function App() {

  useEffect(() => {
   
  }, [])

  return (
    <div className="App">
      
      <Router>

      <ul id="menu-area-mobile"></ul>
      
      <ul id="menu-area">
        <Link to="/home" id="logo-menu" ></Link>
        <div id="searchbar-menu">
          <div id="lupa-icon">
            <SearchIcon 
              color="action"
              sx={{
                fontSize: "30px",
                marginLeft: '15px',
                marginTop: "8px"
              }}
            />           
            </div>
          <input type="text" placeholder="O que você está procurando?" ></input>
        </div>
        <div id="menu-topo">
          <li><NavLink to={"/home"}>Home</NavLink></li>
          <li><NavLink to={"/produtos"}>Produtos</NavLink></li>
          <li><NavLink to={"/login"}>Login</NavLink></li>
        </div>
      </ul>
      
      

      <Suspense fallback={
        <LinearProgress
        color="inherit"
        style={{ 
          position: 'fixed',
          top: '0',
          width: '100%',
          height: '5px',
          marginTop: '100px',
          zIndex: '99'
        }}/>
      }>

        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/produtos" element={<Products/>}/>
          <Route exact path="/produto/:id" element={<ProductUn/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/profile" element={<Profile/>} />
          <Route exact path="/cart" element={<Cart/>} />
          <Route exact path="/checkout" element={<Checkout/>} />
          <Route path="/profile/:id/:slug" element={<Profile/>}/>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Suspense>
      </Router>

    </div>
  
  );
}

export default App;
