import "./App.css";
import { Routes, Route } from "react-router-dom";

import Main from "./components/Main/Main";

import PersSlip from "./pages/PersSlip/PersSlip";
import MainPage from "./pages/MainPage/MainPage";
import AllCharacter from "./pages/AllCharacter/AllCharacter";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="app-div">
      {/* <Main /> */}
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/allCharacter" element={<AllCharacter />} />
          <Route path="/persSlip/:index" element={<PersSlip />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
