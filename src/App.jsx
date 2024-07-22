import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import PersView from "./views/PersView";
import Home from "./views/Home";
import DoneTasks from "./views/DoneTasks";
import TaskManager from "./views/TaskManager"
import { useState } from "react";

function App() {
  const [token, setToken] = useState(localStorage.getItem('authToken') || "")
  return (
    <>
      <Navbar setToken={setToken}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Curriculum" element={<PersView />} />
        <Route path="Tasks" element={<TaskManager token={token}/>}/>
        <Route path="DoneTasks" element={<DoneTasks/>}/>
      </Routes>
    </>
  );
}

export default App;
