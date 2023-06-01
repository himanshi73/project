import { BrowserRouter } from "react-router-dom"
import RoutersScreen from "./view/routers/RoutersScreen"
export default function App(){
  return(
    <>
    <BrowserRouter>
    <RoutersScreen/>
    </BrowserRouter>
    </>
  )
}