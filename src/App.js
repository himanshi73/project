import { BrowserRouter } from "react-router-dom"
import RoutersScreen from "./view/routers/RoutersScreen"
import './view/style/style.css'
export default function App(){
  return(
    <>
    <BrowserRouter>
    <RoutersScreen/>
    </BrowserRouter>
    </>
  )
}