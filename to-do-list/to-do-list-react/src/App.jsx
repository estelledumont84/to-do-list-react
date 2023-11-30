import { useState } from 'react'
import toDoList from './todolist';
import './App.css'

function App() {
  const [tasks, setTasks] = useState(
    [
      {
        value: "Je suis le meilleur ! ",
      checked: true,
    },
    {
      value: "Je suis le meilleur ! ",
      checked: false,
      }
    ])

  return (
    <>
      
       
   
    </>
  )
}

export default App;
