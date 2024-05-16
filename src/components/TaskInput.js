/*Поле ввода и кнопки для добавления новых задач и запуска таймера.*/

import React, { useState } from 'react';
import Play from '../images/play-circle.svg';
import Plus from '../images/plus-circle.svg';

function TaskInput({ addTask }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim()) {
      addTask(inputValue);
      setInputValue(''); // Очистка поля ввода после добавления задачи
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <input 
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Введите задачу"
        style={{ flex: 1, marginRight: '-35px', width: '100vh' }}
      />
      <button onClick={handleAddTask} style={{ border: 'none', background: 'none' }}>
        <img src={Plus} alt="Добавить" style={{ width: '24px', height: '24px' }} />
      </button>
      <button onClick={handleAddTask} style={{ border: 'none', background: 'none' }}>
        <img src={Play} alt="Начать" style={{ width: '24px', height: '24px' }} />
      </button>
    </div>
  );
}

export default TaskInput;


