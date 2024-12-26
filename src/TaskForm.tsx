import React, { useState } from "react";

interface TaskFormProps {
    onCreate: (text: string, color: string) => void;
}

export const TaskForm: React.FC<TaskFormProps> = ({ onCreate }) => {
    const [input, setInput] = useState<string>("");
    const [color, setColor] = useState<string>("red"); // Default color

    const handleClick = () => {
        if (input.trim() === "") return; 
        onCreate(input, color); 
        setInput(""); 
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Add Todo Item"
                value={input}
                onChange={(e) => setInput(e.currentTarget.value)}
            />
            <br />
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
            <button onClick={handleClick}>Create Task</button>
        </div>
    );
};
