/*Всплывающее окно для редактирования задачи.*/

import React, { useState, useEffect } from 'react';
import { formatTime } from './utils'; // Убедитесь, что utils содержит formatTime

function EditTaskPopup({ task, onClose, onSave, onDelete }) {
  const [title, setTitle] = useState(task.title);
  const [startTime, setStartTime] = useState(task.startTime || '');
  const [endTime, setEndTime] = useState(task.endTime || '');

  // Обновляем состояние, если task изменится
  useEffect(() => {
    setTitle(task.title);
    setStartTime(task.startTime || '');
    setEndTime(task.endTime || '');
  }, [task]);

  // Вычисляем продолжительность задачи, если даты установлены
  const duration = startTime && endTime ? formatTime(new Date(endTime).getTime() - new Date(startTime).getTime()) : 'Не указано';

  const handleSave = () => {
    onSave(task.id, { title, startTime, endTime });
    onClose();
  };

  return (
    <div className="edit-task-popup">
      <div className="popup-header">
        <span>Редактирование задачи</span>
        <button onClick={onClose}>X</button>
      </div>
      <div className="popup-body">
        <label>Текст задачи:
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </label>
        <label>Начало:
          <input
            type="datetime-local"
            value={startTime ? startTime.slice(0, 16) : ''}
            onChange={e => setStartTime(e.target.value)}
          />
        </label>
        <label>Окончание:
          <input
            type="datetime-local"
            value={endTime ? endTime.slice(0, 16) : ''}
            onChange={e => setEndTime(e.target.value)}
          />
        </label>
        <p>Продолжительность: {duration}</p>
      </div>
      <div className="popup-footer">
        <button onClick={handleSave}>Сохранить</button>
        <button onClick={() => onDelete(task.id)}>Удалить</button>
      </div>
    </div>
  );
}

export default EditTaskPopup;


