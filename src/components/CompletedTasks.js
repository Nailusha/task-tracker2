/* Отображение списка выполненных задач с дополнительной информацией.*/

import React from 'react';

function CompletedTasks({ tasks }) {
    return (
        <div>
            {tasks.map((task) => (
                <div key={task.id}>
                    <span>{task.title}</span>
                    <span>{task.startTime}</span> - <span>{task.endTime}</span>
                </div>
            ))}
        </div>
    );
}

export default CompletedTasks;
