import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Itemspage from "./pages/Itemspage/Itemspage";
import Singlepage from "./pages/Singlepage/Singlepage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="items" element={<Itemspage />} />
      <Route path="/items/:id" element={<Singlepage />} />
    </Routes>
  );
}

export default App;
