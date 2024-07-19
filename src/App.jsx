import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import PersView from "./views/PersView";
import Home from "./views/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Curriculum" element={<PersView />} />
      </Routes>
    </>
  );
}

export default App;
