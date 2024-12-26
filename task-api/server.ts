
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json()); 


let tasks = [
    { id: 1, text: 'Create Todo App', completed: false, color: 'blue' },
    { id: 2, text: 'Write documentation', completed: false, color: 'green' }
];

app.get('/tasks', (req: Request, res: Response) => {
    res.json(tasks);
});


app.post('/tasks', (req: Request, res: Response) => {
    const { text, color } = req.body;
    const newTask = {
        id: Date.now(),
        text,
        completed: false,
        color
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});


app.put('/tasks/:id', (req: Request, res: Response) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex((task) => task.id === taskId);

    if (taskIndex === -1) {
        return res.status(404).send('Task not found');
    }

    tasks[taskIndex].completed = !tasks[taskIndex].completed;
    res.json(tasks[taskIndex]);
});


app.delete('/tasks/:id', (req: Request, res: Response) => {
    const taskId = parseInt(req.params.id);
    tasks = tasks.filter((task) => task.id !== taskId);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
