import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Inscription from "./pages/Inscription";
import Connexion from "./pages/Connexion";
import TachePage from "./pages/TachePage";


export default function App(){
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/tachepage" element={<TachePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}