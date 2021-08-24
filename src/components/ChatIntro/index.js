import React from 'react';
import './styles.css';

import bg from '../assets/bg.png';

function ChatIntro() {
    return (
        <div className="chatIntro"> 
            <img src={bg} alt="bg"/>
            <h1> Selecione um dos contatos </h1>
        </div>
    );
}

export default ChatIntro;