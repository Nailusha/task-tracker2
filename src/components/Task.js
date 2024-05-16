/* Компонент отдельной задачи, 
который позволяет редактировать задачу и управлять таймером.*/

import React from 'react';

function Task({ task, onEdit, onDelete, onStart, onStop }) {
    // Функция для форматирования продолжительности задачи
    const getDuration = () => {
        if (!task.startTime || !task.endTime) {
            return 'Duration not available';
        }
        const start = new Date(task.startTime);
        const end = new Date(task.endTime);
        const duration = (end - start) / 1000; // продолжительность в секундах
        const hours = Math.floor(duration / 3600);
        const minutes = Math.floor((duration % 3600) / 60);
        return `${hours}h ${minutes}m`;
    };

    return (
        <div className="task-container">
            <div className="task-details">
                <span>{task.title}</span>
                <span>{task.startTime ? new Date(task.startTime).toLocaleTimeString() : 'Not started'}</span>
                {' - '}
                <span>{task.endTime ? new Date(task.endTime).toLocaleTimeString() : 'Not ended'}</span>
                <span className="task-duration" style={{ color: 'blue' }}>{getDuration()}</span>
            </div>
            <div className="task-controls">
                <button onClick={() => onStart(task.id)}>Start</button>
                <button onClick={() => onStop(task.id)}>Stop</button>
                <button onClick={() => onEdit(task)}>Edit</button>
                <button onClick={() => onDelete(task.id)}>Delete</button>
            </div>
        </div>
    );
}

export default Task;




