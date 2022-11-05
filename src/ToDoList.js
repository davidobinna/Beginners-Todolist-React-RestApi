import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { TodosContext } from "./App";
import { Table, Form, Button } from "react-bootstrap";
import useAPI from './useAPI';
import axios from 'axios';
import { v4 as uuidv4 } from "uuid";

function ToDoList() {
    const { state,dispatch } = useContext(TodosContext);
    const [todoText, setTodoText] = useState("");
    const [todoName, setTodoName] = useState("");
    const [editMode, setEditMode] = useState(false);
    const [editTodo, setEditTodo] = useState(null);
    const buttonTitle = editMode ? "Edit" : "Add" ;
    const endpoint = "http://localhost/websitesX/Api/RestServer/todo/"; 
    const savedTodos = useAPI(endpoint);
    
    useEffect( ()=> {
        dispatch({type:"get", payload:savedTodos})
    }, [savedTodos]) 

    const handleSubmit = async event => {
        event.preventDefault();
    if (editMode) {
        const response = await axios.patch(endpoint+editTodo.id,{name:todoName, text:todoText})
        dispatch({type: 'edit',payload:{...editTodo, name:todoName, text:todoText}})
        console.log(response)
        setEditMode(false)
        setEditTodo(null)
    } else {
        const name = todoName;
        const text = todoText;
        const newToDo = {name:todoName,text:todoText}
        const response = await axios.post(
            "http://localhost/websitesX/Api/RestServer/todo/",
            newToDo)
        console.log(response)
        dispatch({type:'add', payload:newToDo})   
    }
    setTodoText("");
    setTodoName("");
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                     <Form.Control type="text" placeholder="Enter Name" onChange={event => setTodoName(event.target.value)} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                     <Form.Control type="text" placeholder="Enter To Do" onChange={event => setTodoText(event.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                   {buttonTitle}
                </Button>
            </Form>
            <Table striped bordered hover>
                <thead>
                <tr>
                <th>Todo ID</th>
                    <th>Name</th>
                    <th>TodoList</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                 { state.todos.map(todo => (
                    <tr key={todo.id}>
                        <td>{todo.id}</td>
                        <td>{todo.name}</td>
                        <td>{todo.text}</td>
                        <td onClick={()=> {
                            setTodoName(todo.name)
                            setTodoText(todo.text)
                            setEditMode(true)
                            setEditTodo(todo)
                        }}>Edit</td>
                        <td onClick={ async () => { 
                            await axios.delete(endpoint+todo.id)
                            dispatch({type:'delete',payload:todo})
                            }}>Delete</td>
                    </tr>
                 ))}
                </tbody>
            </Table>
        </div>
    )
};
export default ToDoList;