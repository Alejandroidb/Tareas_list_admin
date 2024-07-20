import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import PersView from "./views/PersView";
import Home from "./views/Home";
import DoneTasks from "./views/DoneTasks";
import TasksAdder from "./components/TasksAdder";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Curriculum" element={<PersView />} />
        <Route path="Tasks" element={<TasksAdder/>}/>
        <Route path="DoneTasks" element={<DoneTasks/>}/>
      </Routes>
    </>
  );
}

export default App;
