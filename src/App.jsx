import { BrowserRouter, Route, Routes } from "react-router-dom";
import Countries from "./app/countries";
import ShowCountry  from "./app/ShowCountry";

import "./App.css";
import { useDarkMode } from "./app/DarkModeContext";


function App() {
  const {darkMode} = useDarkMode();
  return (
    <div className={`app-container ${darkMode ? "dark" : ""}`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/countries/:param" element={<ShowCountry />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
