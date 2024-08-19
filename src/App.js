import { BrowserRouter, Routes,Route } from "react-router-dom";
import Inicio from './paginas/Inicio'
import SobreMim from './paginas/SobreMim'
import Menu from "./componentes/Menu";

function App() {
  return (
    <BrowserRouter>

      <Menu/>

      <Routes>
        <Route path="/" element = {<Inicio/>}/>
        <Route path="/SobreMim" element={<SobreMim/>}/>
        <Route path="*" element= {<div><h1>Page not found</h1></div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
