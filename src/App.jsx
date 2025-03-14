import "./App.css"
import 'bootstrap/dist/css/bootstrap.css'
import Button from './components/Button'
import PseudoForm from './components/PseudoForm'
import Task from './components/Task'
import Tasks from './components/Tasks'
import Compteur from './components/Compteur'
import DarkModeSwitch from './components/DarkModeSwitch'
import React, { useState, useEffect } from 'react'

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  
  const addTask = () => {
    const index = tasks.length + 1;
    const id = Date.now();
    const name = `Nouvelle tâche ${index}`;
    const task = { id: id, name: name, checkState: false };
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const editTask = (taskId, newName, check) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, name: newName, checkState: check } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (

    <div className="main">
      <h1>Liste des tâches à réaliser</h1>

      <div className="buttons">
        <Button label="Ajouter" onClick={addTask}/>

        <select className="filters">
          <option value="all">Toutes</option>
          <option value="ongoing">En cours</option>
          <option value="finished">Terminées</option>
        </select>
      </div>

      <Tasks tasks={tasks} deleteTask={deleteTask} editTask={editTask} />

      
    </div>

  )

  return (
    <>
      <PseudoForm />
    </>
  )

  return (
    <>
    <Compteur />
    </>
    )

  return (
    <>
    <DarkModeSwitch />
    </>
    )
}

export default App