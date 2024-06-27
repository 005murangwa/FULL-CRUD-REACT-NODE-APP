import React, { useEffect, useState } from 'react';
import { getTasks, deleteTask } from '../api/api';
import TaskItem from './TaskItem';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const response = await getTasks();
        setTasks(response.data);
    };

    const handleDelete = async (id) => {
        await deleteTask(id);
        fetchTasks();
    };

    return (
        <div className="container mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-4">Task List</h2>
            <div className="grid gap-4">
                {tasks.map(task => (
                    <TaskItem key={task.id} task={task} onDelete={handleDelete} />
                ))}
            </div>
        </div>
    );
};

export default TaskList;
