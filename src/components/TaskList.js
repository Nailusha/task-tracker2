/*Отображение списка текущих задач.*/

import React from 'react';
import Task from './Task';

function TaskList({ tasks, onEdit, onDelete, onStart, onStop, formatTime }) {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
          onStart={onStart}
          onStop={onStop}
        />
      ))}
    </div>
  );
}

export default TaskList;




