import { BrowserRouter, Routes,Route } from "react-router-dom";
import Inicio from './paginas/Inicio'
import SobreMim from './paginas/SobreMim'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Inicio/>}/>
        <Route path="/SobreMim" element={<SobreMim/>}/>
        <Route path="*" element= {<div><h1>Page not found</h1></div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
