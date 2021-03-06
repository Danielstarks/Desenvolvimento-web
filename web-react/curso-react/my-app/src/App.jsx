import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid'

import Tasks from './components/Tasks';
import AddTask from "./components/AddTask";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar Programação",
      completed: false,
    },
    {
      id: "2",
      title: "Ler Livros",
      completed: true,
    },
  ]);

  const handleTaskClick = (taskid) => {
    const newTasks = tasks.map(task => {
      if (task.id == taskid) return { ...task, completed: !task.completed }

      return task;
    });
  };

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks, {

        title: taskTitle,
        id: uuidv4(),
        completed: false,

      },
    ];

    setTasks(newTasks);

  };

  return (
    <>
      <div className="container">
        <AddTask />
        <Tasks tasks={tasks} />
      </div>
    </>
  );
};

export default App;
