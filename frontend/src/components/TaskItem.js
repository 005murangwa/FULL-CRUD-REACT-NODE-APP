import React from 'react';
import { Link } from 'react-router-dom';

const TaskItem = ({ task, onDelete }) => {
    return (
        <div className="p-4 border rounded shadow">
            <h3 className="text-xl font-semibold">{task.title}</h3>
            <p className="mb-2">{task.description}</p>
            <Link to={`/edit/${task.id}`} className="text-blue-500 mr-2">Edit</Link>
            <button onClick={() => onDelete(task.id)} className="text-red-500">Delete</button>
        </div>
    );
};

export default TaskItem;
