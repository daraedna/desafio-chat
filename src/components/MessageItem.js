import React from 'react';
import './MessageItem.css';

function MessageItem({chat, user, contact}) {

    return (

        <div className="messageLine"
            style={{
                justifyContent: user.id === chat.author ? 'flex-end' : 'flex-start'
            }}
        
        > 
            <div 
                className="message-item"
                style={{
                    backgroundColor: user.id === chat.author ? '#DCF8C6' : 'white',
                    borderRadius: user.id === chat.author ? '10px 10px 0px 10px' : '10px 10px 10px 0px' ,
                }}
            >
                <div className="message-text">
                        {chat.body}
                </div>
                <div className="message-hour">
                   {contact}
                </div>
            </div>
        </div>
    );
}

export default MessageItem;