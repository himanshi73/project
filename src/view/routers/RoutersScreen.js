import { Route , Link, Routes } from "react-router-dom";
import Register from "../screen/Register";
import Product from "../screen/Product";
import Login from "../screen/Login";
import Home from "../screen/Home";
export default function RoutersScreen(){
    return(
     <>
     <div>
        < Link to="/">Home</Link>
        < Link to="/product">Product</Link>
        < Link to="/register">Register</Link>
        < Link to="/login">Login</Link>
     </div>
     <Routes>
        <Route path="/home" Component={Home}/>
        <Route path="/register" Component={Register}/>
        <Route path="/login" Component={Login}/>
        <Route path="/product" Component={Product}/>
     </Routes>
     </>
    )
  }