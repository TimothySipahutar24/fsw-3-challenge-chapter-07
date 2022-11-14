import HomePage from "./layouts/home/Home";
import CarsPage from "./layouts/cars/Cars";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cars" element={<CarsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
