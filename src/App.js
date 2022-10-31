import logo from './logo.svg';
//import './App.css';
import Products from './Products';
//import Product from './Product'; 
import Img from './logo.svg';
import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import Rating from './Rating'; 
import CardComponent from './Card';
import UserForm from './UserForm';
import Github from './Github';
import { useReducer } from 'react';
import ToDoList from "./ToDoList";
import { v4 as uuidv4 } from "uuid";

const todosInitialState = {
  todos: [{id:1, text: "finishing writing hooks  chapter"},
  {id:2, text: "play with kids"},
  {id:3, text: "read bible"}
  ]
};

export const TodosContext = React.createContext();

function App() {
  const [state,dispatch] = useReducer(todosReducer,todosInitialState); 

    return(
      <div>
        <h2>TodoList Application</h2>
         <TodosContext.Provider value={{state,dispatch}}>
         <ToDoList />
         </TodosContext.Provider>
      </div>
    )
  }

function todosReducer(state,action) {
  switch (action.type) {
    case 'add':
      const newTodDo = {id: uuidv4(), text:action.payload}
      //add new  todo onto array
     const addedToDos = [...state.todos, newTodDo ];
     //spread the state and assign todos
     return {...state, todos:addedToDos }
    case 'delete':
       const filteredTodoState = state.todos.filter(todo => todo.id !== action.payload.id)
       return {...state, todos:filteredTodoState }
    case 'edit':
      const updatedToDo = {...action.payload}
      const updatedToDoIndex = state.todos.findIndex(t => t.id === action.payload.id )
      const updatedToDos = [
        ...state.todos.slice(0, updatedToDoIndex), updatedToDo,
         ...state.todos.slice(updatedToDoIndex + 1)
      ];
      return {...state, todos:updatedToDos}
    default:
      return todosInitialState;
  }
}
export default App;
