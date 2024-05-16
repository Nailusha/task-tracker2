import { useState, useEffect } from 'react';

const useTaskManager = () => {
  const [tasks, setTasks] = useState(() => {
    // Пытаемся загрузить задачи из localStorage при инициализации
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [activeTaskId, setActiveTaskId] = useState(null);

  useEffect(() => {
    // Сохраняем задачи в localStorage каждый раз, когда они изменяются
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      startTime: null,
      endTime: null,
      isActive: false
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
    if (id === activeTaskId) {
      setActiveTaskId(null);
    }
  };

  const updateTask = (id, updates) => {
    setTasks(prevTasks =>
      prevTasks.map(task => task.id === id ? { ...task, ...updates } : task)
    );
  };

  const startTaskWithTimer = (id) => {
    if (activeTaskId) {
      console.error('Another task is already active.');
      return;
    }
    setActiveTaskId(id);
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, startTime: new Date().toISOString(), isActive: true } : task
      )
    );
  };

  const stopTask = (id) => {
    if (id !== activeTaskId) {
      console.error('This task is not the active task.');
      return;
    }
    setActiveTaskId(null);
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, endTime: new Date().toISOString(), isActive: false } : task
      )
    );
  };

  return {
    tasks,
    addTask,
    deleteTask,
    updateTask,
    startTaskWithTimer,
    stopTask
  };
};

export default useTaskManager;

