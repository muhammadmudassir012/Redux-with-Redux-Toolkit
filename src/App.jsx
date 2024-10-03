import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

function App() {

  return (
    <div>
      <h1>Todo with Redux Toolkit</h1>
      <AddTodo/>
      <Todo/>
    </div>
  )
}

export default App
