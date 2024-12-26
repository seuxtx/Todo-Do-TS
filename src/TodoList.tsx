import React, { useState } from "react";
import './index.css';

interface item {
    id: number;
    text: string;
    completed: boolean;
    color: string;
}

export const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<item[]>([

    ])
    
    const [input, setInput] = useState<string>("");
    const [color, setColor] = useState<string>("#red");

    const handleToggle = (id:number) => {
        setTodos(
            todos.map((todo) => {
                if(todo.id === id){
                    return{ ...todo, completed: !todo.completed}
                }
                return todo;
            })
        );
    };
    
    const handleClick= () => {
        const newTodo: item = {id: Date.now(),text:input,completed:false, color};
        setTodos([...todos, newTodo]);
        setInput("")
    };

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const activeTodos = todos.filter((todo) => !todo.completed).length;
    const completedTodos = todos.filter((todo) => todo.completed).length;

    return (
        <div className="main-container">
            <button className="createB" onClick={handleClick}
            >Create Task</button>
            <br/>
            <input
                type="text"
                placeholder="Add Todo Item"
                value={input}
                onChange={(e) => setInput(e.currentTarget.value)}
            />
            <br/>
{/* Color picker dropdown */}
            <select
                value={color}
                onChange={(e) => setColor(e.target.value)}
                style={{ padding: "5px", margin: "10px 0" }}
            >
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="purple">Purple</option>
                <option value="violet">Violet</option>
                <option value="pink">Pink</option>
            </select>
            <br />
            <div className="mt-4 text-blue">
                <p>Active Todos: {activeTodos}</p>
                <p>Completed Todos: {completedTodos}</p>
            </div>
            <ul className="List">
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className="todo-item"
                        onClick={() => handleToggle(todo.id)}
                        style={{ backgroundColor: todo.color }} // Set background color
                    >
                        <span
                            className="todo-text"
                            style={{
                                textDecoration: todo.completed ? "line-through" : "none",
                                cursor: "pointer",
                            }}
                        >
                            {todo.text}
                        </span>
                        <button
                            className="delete-button"
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent toggle when clicking delete
                                handleDelete(todo.id);
                            }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>

        </div>
    );
};

