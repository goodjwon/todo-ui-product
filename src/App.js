import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {


  //State stuff
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodoList, setFilteredTodoList] = useState([]);

  //UseEffect
  useEffect( ()=>{
    filterHandler();
    saveLocalTodoList();
  }, [todoList, status]);
  

  //functions
  const filterHandler = () => {
    switch(status){
      case 'completed' :
        setFilteredTodoList(todoList.filter((todo)=>todo.completed === true));
        break;
      case 'uncompleted' :
        setFilteredTodoList(todoList.filter((todo)=>todo.completed === false));
        break;
      default:
        setFilteredTodoList(todoList);
        break;
    }
  };

  //save to local
  const saveLocalTodoList = () =>{
    if(localStorage.getItem('todoList') === null ){
      localStorage.setItem('todoList', JSON.stringify([]))
    } else {
      localStorage.setItem('todoList', JSON.stringify(todoList))
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Won's Todo List</h1>
      </header>
      <Form 
        inputText={inputText} 
        todoList={todoList} 
        setTodoList={setTodoList} 
        setInputText={setInputText} 
        setStatus={setStatus}
        />
      <TodoList 
        filteredTodoList={filteredTodoList} 
        setTodoList={setTodoList} 
        todoList={todoList}/>
    </div>
  );
}

export default App;
