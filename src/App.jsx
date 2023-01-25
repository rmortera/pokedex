import { HashRouter, Route, Routes } from "react-router-dom";
import PokemonDetail from "./components/PokemonDetail";
import Pokedex from "./components/Pokedex";
import InputName from "./components/InputName";
import ProtectedRoutes from "./components/ProtectedRoutes";
import pokedex from "./assets/pokedex.png";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <img src={pokedex} />
      <HashRouter>
        <Routes>
          <Route path="/" element={<InputName />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/pokemon/:id" element={<PokemonDetail />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
