
import React,{useState} from "react";
import './../styles/App.css';
import './index.css'

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };
  return (
    <div>
        <div>
             <p>To-Do List</p>
        </div>
        <div>
          <input type="text" placeholder="Enter a task" value={task} onChange={handleTaskChange} />
          <button onClick={handleAddTask}>Add Todo</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="list-item">
            <span>{task}</span>
            <button onClick={() => handleRemoveTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
