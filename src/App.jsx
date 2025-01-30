import './App.css'
import Navbar from './components/Navbar';
import TaskBoard from './components/TaskBoard'

function App() {

  return (
    <div className="task-container">
      <Navbar/>
      <TaskBoard/>
    </div>
  );
}

export default App
