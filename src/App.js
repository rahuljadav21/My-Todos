import React,{useState,useEffect} from 'react'
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText,setInputText] = useState("");
  const [todos,setTodos] = useState([]); 
  const [status,setStatus] = useState('all');
  const [filteredTodos,setfilteredTodos] = useState([]);

  

  const filterHandler=()=>{
    switch (status) {
      case 'completed':
         setfilteredTodos(todos.filter(todo => todo.completed===true));
        break;

      case 'uncompleted':
          setfilteredTodos(todos.filter(todo => todo.completed===false));
         break;
    
      default:
        setfilteredTodos(todos)
        break;
    }
  }

 

  const saveLocalTodos = () =>{
     localStorage.setItem("todos",JSON.stringify(todos))
  }
  const getLocalTodos = () =>{
    if(localStorage.getItem("todos")=== null) {
      localStorage.setItem("todos",JSON.stringify([]));
    }
    else{
     let todoLocal= JSON.parse(localStorage.getItem("todos"))
      console.log(todoLocal);
      setTodos(todoLocal)
    }
  }
  useEffect(()=>{
    getLocalTodos()
  },[])

  useEffect(()=>{
    filterHandler();
    saveLocalTodos();
  },[todos,status])
  return (
    <div className="App">
      <header>
        <h1>My Todo List</h1>
      </header>
      <Form setStatus={setStatus} inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos}/>
      <TodoList filteredTodos={filteredTodos} todos= {todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
