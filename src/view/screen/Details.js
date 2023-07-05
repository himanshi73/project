import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
export default function Details(){
    const nav = useNavigate()
    const loc =useLocation()
    const [datas, setdata] = useState(loc.state)

console.log(data);  
return(
        <>
        <div className="pdetails">
            <div className="pdetails-img">
               <p>{data.productname}</p>
               <p>{data.rate}</p>
              </div>    
            
            <div className="pdetails-text">
               
                <p></p>
                <button><span>+</span></button>
                <span>1</span>
                <button><span>-</span></button>
            </div>    
            <div className="pdetails-pay">
                <p>Total pay:</p>
                <button onClick={()=>nav('/addtocart',{state:""})}>Addtocart</button>
                <button onClick={()=>nav('/payment',{state:""})}>Buy Now</button>
            </div>    
        </div>
        </>
    )
}
