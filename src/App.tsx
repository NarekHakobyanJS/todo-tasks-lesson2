import React, {useState} from 'react';
import { TodoList } from './TodoList';
import { TaskType } from './TodoList';
import './App.css';

export type FilterValuesType = 'all' | 'active' | 'completed'

function App() {

  let [tasks, setTasks] = useState<Array<TaskType>>([
    {id : 1, title : 'HTML', isDone : true},
    {id : 2, title : 'CSS', isDone : true},
    {id : 3, title : 'JAVASCRIPT', isDone : false},
  ])
  let [filter, setFilter] = useState<FilterValuesType>('all')

  function removeTask(id : number){
    setTasks(tasks.filter((t) => t.id !== id))
  }

  function changeFilter(value : FilterValuesType){
    setFilter(value)
  }
  let tasksForTodoList = tasks
  if(filter === 'completed') {
    tasksForTodoList = tasks.filter((t) => t.isDone === true)
  }

  if(filter === 'active') {
    tasksForTodoList = tasks.filter((t) => t.isDone === false)
  }

  return (
    <div className="App">
      <TodoList 
      title='what learn' 
      tasks={tasksForTodoList} 
      removeTask={removeTask}
      changeFilter={changeFilter}
      />
    </div>
  );
}

export default App;
