import React, { useState, useEffect } from 'react';
import './App.css';

import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import EditTaskPopup from './components/EditTaskPopup';
import ProfileLoginPopup from './components/ProfileLoginPopup';
import useTaskManager from './hooks/useTaskManager';
import { formatTime } from './components/utils';

import Edit from './images/align-bottom-01.svg';
import User from './images/user-03.svg';

function App() {
  const { tasks, addTask, startTaskWithTimer, stopTask, deleteTask, updateTask } = useTaskManager();
  const [username, setUsername] = useState('Rodion');
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [viewTodayOnly, setViewTodayOnly] = useState(true);
  const [currentTask, setCurrentTask] = useState(null);
  const [isTaskPopupOpen, setTaskPopupOpen] = useState(false);
  const [isProfilePopupOpen, setProfilePopupOpen] = useState(false);

  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);
    const todayTasks = tasks.filter(task => task.startTime && task.startTime.slice(0, 10) === today);
    setFilteredTasks(viewTodayOnly ? todayTasks : tasks);
  }, [tasks, viewTodayOnly]);

  const handleEditTask = (task) => {
    setCurrentTask(task);
    setTaskPopupOpen(true);
  };

  const handleEditProfile = () => {
    setProfilePopupOpen(true);
  };

  const handleCloseTaskPopup = () => {
    setTaskPopupOpen(false);
  };

  const handleCloseProfilePopup = () => {
    setProfilePopupOpen(false);
  };

  return (
    <div className="app-container">
      <h1>Задачи</h1>
      <TaskInput addTask={addTask} />
      <TaskList tasks={filteredTasks} onEdit={handleEditTask} onDelete={deleteTask} onStart={startTaskWithTimer} onStop={stopTask} />
      <div className="footer-controls">
        <button onClick={handleEditProfile}><img src={Edit} alt='Загрузка' />Загрузить еще</button>
        <button onClick={() => setViewTodayOnly(!viewTodayOnly)}>
          {viewTodayOnly ? "Показать все" : "Только сегодня"}
        </button>
        <span onClick={handleEditProfile}><img src={User} alt='Пользователь' />{username}</span>
      </div>
      {isTaskPopupOpen && currentTask && (
        <>
          <div className="overlay" onClick={handleCloseTaskPopup}></div>
          <EditTaskPopup
            task={currentTask}
            onClose={handleCloseTaskPopup}
            onSave={updateTask}
            onDelete={deleteTask}
          />
        </>
      )}
      {isProfilePopupOpen && (
        <>
          <div className="overlay" onClick={handleCloseProfilePopup}></div>
          <ProfileLoginPopup onClose={handleCloseProfilePopup} />
        </>
      )}
    </div>
  );
}

export default App;

