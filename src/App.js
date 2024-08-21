import { BrowserRouter, Routes,Route } from "react-router-dom";
import Inicio from './paginas/Inicio'
import SobreMim from './paginas/SobreMim'
import Menu from "./componentes/Menu";
import Rodape from "./componentes/Rodape";
import PaginaPadrao from "./componentes/PaginaPadrao";
import Post from "./paginas/Post";

function App() {
  return (
    <BrowserRouter>

      <Menu/>

      <Routes>

        <Route path="/" element={<PaginaPadrao/>}>
          <Route path="/" element = {<Inicio/>}/>
          <Route path="/SobreMim" element={<SobreMim/>}/>
          <Route path="/posts/:id" element={<Post/>}/>
        </Route>

        <Route path="*" element= {<div><h1>Page not found</h1></div>}/>

      </Routes>

      <Rodape/>
    </BrowserRouter>
  );
}

export default App;
