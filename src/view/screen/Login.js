export default function Login(){
    function loginuser(){
        alert("login user")
    }
    return(
    <div>
        <input type="email" placeholder="enter email"/>
        <input type="password"/>
        <button onClick={loginuser}>Login</button>
    </div>
    )
  }