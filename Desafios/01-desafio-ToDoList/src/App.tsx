import { Header } from './components/Header'
import styles from './App.module.css'
import './Global.css'
import {v4 as uuidv4} from 'uuid';
import { PlusCircle } from 'phosphor-react'
import { Tasks } from './components/Tasks'
import { FormEvent, useState, ChangeEvent } from 'react'

export function App() {
  const [taskText, setTaskText] = useState('')

  const [newTaskText, setNewTaskText] = useState([{}])

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()
    if(!newTaskText) return;

    const taskId = uuidv4().toString()
    const newTask = {id:taskId, content: taskText, isCompleted: false}
    
    setNewTaskText(state =>  [...state, newTask])

    setTaskText('')
  }

  function deleteTask(id: string) {
    const newTaskWithoutDeletedOne = newTaskText.filter(tasks => {
      return tasks.id !== id
    })

    setNewTaskText(newTaskWithoutDeletedOne)
  }

  const isNewTask = newTaskText.length === 0

  return (
    <div className="App">
      <Header />
      <div className={styles.post}>
        <form onSubmit={handleCreateNewTask}>
          <input type="text" placeholder="Adicione uma nova tarefa" className={styles.input} value={taskText} onChange={e => setTaskText(e.target.value)} />
            
          <button type="submit" disabled={isNewTask} className={styles.button} onClick={handleCreateNewTask} >
              Criar
              <div className={styles.plus}>
                  <PlusCircle size={16} />
              </div>
          </button>
        </form>
        <div className={styles.listTask}>
         
        </div>
      </div>
    </div>
  )
}

