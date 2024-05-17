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
        <div className="overlay" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ position: 'relative', width: '300px', backgroundColor: '#2f2e2e', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <h2>Редактирование профиля</h2>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" style={{ width: '100%', padding: '10px', marginBottom: '10px' }} />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" style={{ width: '100%', padding: '10px', marginBottom: '10px' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 0' }}>
                    <button onClick={handleLogin} style={{ padding: '10px 20px', cursor: 'pointer', marginRight: '10px' }}><img src={Save} alt='Сохранить' />Сохранить</button>
                    <button onClick={onClose} style={{ padding: '10px 20px', cursor: 'pointer' }}><img src={Out} alt='Выход' />Выход</button>
                </div>
            </div>
        </div>
    );
}

export default ProfileLoginPopup;

