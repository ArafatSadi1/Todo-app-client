import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route} from "react-router-dom";
import Todo from './components/Todo';
import Calender from './components/Calender';
import CompletedTasks from './components/CompletedTasks';
import Home from './components/Home';

function App() {
  return (
    <div className="w-full h-screen bg-lime-100">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/complete" element={<CompletedTasks />} />
        <Route path="/calender" element={<Calender />} />
      </Routes>
    </div>
  );
}

export default App;
