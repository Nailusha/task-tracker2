/*вход пользователя в профиль*/

import React, { useState } from 'react';
import Save from '../images/save-01.svg';
import Out from '../images/log-out-04.svg';

function ProfileLoginPopup({ onClose }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Login attempt:', username, password);
        onClose();  // Закрытие попапа после попытки входа
    };

    return (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#D9D9D91A', padding: '20px' }}>
            <h2>Редактирование профиля</h2>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
            <div style={{ display: 'flex', padding: '20px'}}>
                <button onClick={handleLogin}><img src={Save} alt='Сохранить'/>Сохранить</button>
                <button onClick={onClose}><img src={Out} alt='Выход'/>Выход</button>
            </div>
        </div>
    );
}

export default ProfileLoginPopup;
