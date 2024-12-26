import React from "react";
import { TaskForm } from "./TaskForm";
import { useNavigate } from "react-router-dom";

export const CreateTask: React.FC = () => {
    const navigate = useNavigate();

    const handleCreateTask = (text: string, color: string) => {
        
        console.log("Created task:", text, "with color:", color);
        
        navigate("/");
    };

    return (
        <div className="create-task-container">
            <h1>Create a New Task</h1>
            <TaskForm onCreate={handleCreateTask} />
        </div>
    );
};
