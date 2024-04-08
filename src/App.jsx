import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import {Provider} from 'react-redux'
import {store} from './App/store'

function App() {

  return (
    <Provider store={store}>
      <h1 className='text-3xl'>Redux Toolkit</h1>
      <AddTodo/>
      <Todos/>
    </Provider>
  )
}

export default App
