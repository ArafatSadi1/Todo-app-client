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

function App() {
  return (
    <div className="w-full h-screen bg-lime-100">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/complete" element={<CompletedTasks />} />
        <Route path="/calender" element={<Calender />} />
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
