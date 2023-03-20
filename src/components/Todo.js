import React, { useState } from 'react'
import "./Togo.css"

function Todo() {
        const [list, setList] = useState([]);
    const [input, setInput] = useState("");

    const addTodo = (todo) => {
        const newTodo = {
            id: Math.random(),
            todo: todo
        };

        // add the todo to the list
        setList([...list, newTodo]);
        
        // clear input box
        setInput("");
    };

    const deleteTodo = (id) => {
        // filter out todo with the id
        const newList = list.filter((todo) => todo.id !== id);

        setList(newList)
    }

  return (
    <div className='come'>
        <h1 className='go'>Todo List</h1>
        <input 
        className='search-bar'
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)}
        />
        <button className='btn' onClick={() => addTodo(input)}>Add</button>
        <ul>
            {list.map((todo) => (
                <ul><li key={todo.id}>
                {todo.todo}
                <button onClick={() => deleteTodo(todo.id)}>&times;</button>
            </li></ul>
                
            ))}
        </ul>
    </div>
  )
}

export default Todo