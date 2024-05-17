/* Компонент отдельной задачи, 
который позволяет редактировать задачу и управлять таймером.*/

import React from 'react';

function Task({ task, onEdit, onDelete, onStart, onStop }) {
    // Функция для обработки клика по кнопкам, чтобы предотвратить всплывание событий
    const handleButtonClick = (e, action) => {
        e.stopPropagation(); // Предотвращаем всплывание события
        action(); // Вызываем переданное действие
    };

    return (
        <div className="task-container" onClick={() => onEdit(task)} >
            <div className="task-details">
                <span>{task.title}</span>
                <span>{task.startTime ? new Date(task.startTime).toLocaleTimeString() : 'Not started'}</span>
                {' - '}
                <span>{task.endTime ? new Date(task.endTime).toLocaleTimeString() : 'Not ended'}</span>
            </div>
            <div className="task-controls">
                {/* Используем handleButtonClick для каждой кнопки, передавая соответствующее действие */}
                <button onClick={(e) => handleButtonClick(e, () => onStart(task.id))}>Start</button>
                <button onClick={(e) => handleButtonClick(e, () => onStop(task.id))}>Stop</button>
                <button onClick={(e) => handleButtonClick(e, () => onDelete(task.id))}>Delete</button>
            </div>
        </div>
    );
}

export default Task;





