import { Route,Router } from "rect-router-dom";
import Home from "../screen/Home";
import Product from "./screen/Product";
import Details from "./screen/Details";

export default function RoutersNav(){
    return(
        <>
        <div style={{width:'100%',height:'100',backgroundColor:'yellow',padding:20}}>
            <Link to="/"style={{padding:10}}>Home</Link>
            <Link to="/product"style={{padding:10}}>Product</Link>
            <Link to="/details"style={{padding:10}}>Details</Link>
        </div>
        <Router>
            <Route path="/"element={<Home/>}/>
            <Route path="/product"element={<Product/>}/>
            <Route path="/details"element={<Details/>}/>
        </Router>
        </>
    )
}