import { useState } from "react"
import { useNavigate } from "react-router-dom"
export default function Login()
{
  const nav = useNavigate()
   const[email,setEmail]=useState('')
   const[password,setPassword]=useState('')
   function loginuser(){
    console.log(email);
    console.log(password);
 if(email!=="" && password!==""){
      localStorage.setItem("user",email)
      nav("/home")
      setEmail("")
    setPassword("")
   }
    else{

      alert("enter form...")
     }
}
function  Register(){
alert("register")
nav("/register")
  }
function usernav(){
    console.log("nav");
    nav("/home")
  }
 return(
      <>
      <div class="loginform">
        <h1>User Login..</h1>
        <input  type="email" placeholder="enter email" value={email} onChange={d=> setEmail(d.target.value)}/>
        <input type="password" value={password} onChange={d=> setPassword(d.target.value)}/>
        <button onClick={loginuser}>Login</button>
      </div>
    </>
    );
}