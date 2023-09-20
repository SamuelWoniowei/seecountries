import { BrowserRouter, Route, Routes } from "react-router-dom";
import Countries from "./app/countries";
import ShowCountry  from "./app/ShowCountry";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/countries/:name" element={<ShowCountry />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
