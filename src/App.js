import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route} from "react-router-dom";
import Calender from './components/Calender';
import CompletedTasks from './components/CompletedTasks';
import Home from './components/Home';
import Todos from './components/Todos';
import 'react-day-picker/dist/style.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

function App() {
  const today = new Date();
  const [selectedDay, setSelectedDay] = useState(today);
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home selectedDay={selectedDay} />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/complete" element={<CompletedTasks />} />
        <Route path="/calender" element={<Calender selectedDay={selectedDay} setSelectedDay={setSelectedDay} />} />
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
