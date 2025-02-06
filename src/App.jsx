import './App.css'
import Navbar from './components/Navbar';
import TaskBoard from './components/TaskBoard'
import { SearchProvider } from './searchContext';

function App() {

  return (
    <div className="task-container">
      <SearchProvider>
          <Navbar/>
          <TaskBoard/>
      </SearchProvider>
    </div>
  );
}

export default App
