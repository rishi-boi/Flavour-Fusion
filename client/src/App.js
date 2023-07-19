import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route exact path="/recipe" element={<Recipe/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
