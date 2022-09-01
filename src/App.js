import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {


  //State stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodoList, setfilteredTodoList] = useState([]);

  useEffect( ()=>{
    filterHandler();
  }, [todos, status]);
  

  //functions
  const filterHandler = () => {
    switch(status){
      case 'complated' :
        setfilteredTodoList(todos.filter(todo=>todo.complated === true));
        break;
      case 'uncomplated' :
        setfilteredTodoList(todos.filter(todo=>(todo.uncomplated === true)));
        break;
      default:
        setfilteredTodoList(todos);
        break;
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Won's Todo List</h1>
      </header>
      <Form 
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText} 
        setStatus={setStatus}
        filteredTodoList={setfilteredTodoList}
        />
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
