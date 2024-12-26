import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TodoList } from "./TodoList";
import { CreateTask } from "./CreateTask";
import { Header } from "./header";
import { TaskForm } from "./TaskForm";


export const App: React.FC = () => {
  return (
    <div>
    <Header />
      <Router>
          <Routes>
              <Route path="/" element={<TodoList />} />
              <Route path="/create" element={<CreateTask />} />
          </Routes>
      </Router>
      </div>
  );
};