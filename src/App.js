import { BrowserRouter, Routes,Route } from "react-router-dom";
import Inicio from './paginas/Inicio'
import SobreMim from './paginas/SobreMim'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Inicio/>}/>
        <Route path="/SobreMim" element={<SobreMim/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
