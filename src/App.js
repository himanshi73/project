import { BrowserRouter } from "react-router-dom";
import RoutersNav from ".view/routersnav/RoutersNav";

export default function App()
{
  return(
    <>
    <RoutersNav/>
    <BrowserRouter/>
    </>
  )
}