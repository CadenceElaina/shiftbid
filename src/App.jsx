import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/*    <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} /> */}
      </Routes>
    </>
  );
}

export default App;
