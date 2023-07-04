import { Route , Link, Routes } from "react-router-dom";
import Register from "../screen/Register"
import Product from "../screen/Product"
import Login from "../screen/Login"
import Home from "../screen/Home"
import Details from "../screen/Details";
import Addtocart from "../screen/Addtocart";
export default function RoutersScreen(){
   return(
     <>
     <div>
        < Link className="nav-bar" to="/home">Home</Link>
        < Link className="nav-bar"to="/product">Product</Link>
        < Link className="nav-bar"to="/register">Register</Link>
        < Link className="nav-bar" to="/login">Login</Link>
        < Link className="nav-bar"to="/details">Details</Link>
        < Link className="nav-bar"to="/addtocart">Addtocart</Link>
       </div>
     <Routes>
        <Route path="/home" Component={Home}/>
        <Route path="/register" Component={Register}/>
        <Route path="/login" Component={Login}/>
        <Route path="/product" Component={Product}/>
        <Route path="/details" Component={Details}/>
        <Route path="/addtocart" Component={Addtocart}/>
     </Routes>
     </>
    )
  }