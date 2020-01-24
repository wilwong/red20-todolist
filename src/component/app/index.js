import React, { useState } from 'react'; 
import './style.css';
import InputField from '../inputfield';
import TasksList from '../taskslist';

function App() {
  console.log('APP RERENDERED');

  const [tasks, setTasks] = useState([]);
  
  const saveTasks = function(newTask){
    const newTasks = tasks.map(item=>item);
    newTasks.push(newTask);
    setTasks(newTasks);
  }

  return (
    <div className="container">
      <div className="inner-container">
        <p>Things <i>To-Do</i> Today:</p>
        <InputField onSave={saveTasks} />
        <TasksList tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
