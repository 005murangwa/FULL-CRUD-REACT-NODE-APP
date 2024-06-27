import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getTask, createTask, updateTask } from '../api/api';

const TaskForm = () => {
    const [task, setTask] = useState({ title: '', description: '' });
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        if (id) fetchTask(id);
    }, [id]);

    const fetchTask = async (id) => {
        const response = await getTask(id);
        setTask(response.data);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            await updateTask(id, task);
        } else {
            await createTask(task);
        }
        history.push('/');
    };

    return (
        <div className="container mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-4">{id ? 'Update Task' : 'Create Task'}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                    type="text" 
                    name="title" 
                    value={task.title} 
                    onChange={handleChange} 
                    placeholder="Title" 
                    required 
                    className="w-full p-2 border rounded"
                />
                <textarea 
                    name="description" 
                    value={task.description} 
                    onChange={handleChange} 
                    placeholder="Description" 
                    required 
                    className="w-full p-2 border rounded"
                />
                <button 
                    type="submit" 
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    {id ? 'Update' : 'Create'} Task
                </button>
            </form>
        </div>
    );
};

export default TaskForm;
