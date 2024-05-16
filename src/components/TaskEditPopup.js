/*редактирования временных параметров задачи*/

import React, { useState, useEffect } from 'react';
import { formatTime } from './utils'; // Убедитесь, что utils содержит formatTime

function TaskEditPopup({ task, onClose, onSave, onDelete }) {
    const [title, setTitle] = useState(task.title);
    const [startTime, setStartTime] = useState(task.startTime);
    const [endTime, setEndTime] = useState(task.endTime);

    // Вычисляем продолжительность задачи
    const calculateDuration = () => {
        const start = new Date(startTime);
        const end = new Date(endTime);
        const duration = end - start;
        return formatTime(duration);
    };

    useEffect(() => {
        // При изменении задачи устанавливаем новые значения
        setTitle(task.title);
        setStartTime(task.startTime);
        setEndTime(task.endTime);
    }, [task]);

    const handleSave = () => {
        onSave({
            ...task,
            title,
            startTime,
            endTime
        });
        onClose();
    };

    return (
        <div className="task-edit-popup">
            <div className="task-edit-header">
                <span>Редактирование задачи</span>
                <button onClick={onClose}>&times;</button>
            </div>
            <div className="task-edit-body">
                <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Название задачи"
                />
                <label>
                    Начало:
                    <input
                        type="datetime-local"
                        value={startTime.slice(0, 16)}
                        onChange={e => setStartTime(e.target.value)}
                    />
                </label>
                <label>
                    Окончание:
                    <input
                        type="datetime-local"
                        value={endTime.slice(0, 16)}
                        onChange={e => setEndTime(e.target.value)}
                    />
                </label>
                <p>Продолжительность: {calculateDuration()}</p>
            </div>
            <div className="task-edit-footer">
                <button onClick={handleSave}>Сохранить</button>
                <button onClick={() => onDelete(task.id)}>Удалить</button>
            </div>
        </div>
    );
}

export default TaskEditPopup;

