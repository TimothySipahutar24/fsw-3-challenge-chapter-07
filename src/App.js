import Home from "./layouts/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path='cars' element={<CarsPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
