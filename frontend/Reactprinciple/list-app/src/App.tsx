import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TaskList from './TaskList/TaskList'

function App() {
  const [tasks, setTasks] = useState<{Task[]>([]));
const addTask = (taskName: string) => {
  setTasks([...tasks, { id: tasks.length + 1, name: taskName }]);
};  

  return (
    <div className="app-container">
      <h1>Lista de Tarefas</h1>
      <addTask onAddTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App
