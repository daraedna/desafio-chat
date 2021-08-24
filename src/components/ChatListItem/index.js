import React from 'react';
import './styles.css'

function ChatListItem({onClick, active, data}) {
    return (
        <div className={`chatListItem ${active?'active':''}`}
        onClick={onClick}
        >
            <img className="chatListItem-avatar" src={`https://source.unsplash.com/${data.avatar_id}/900x900` } alt=""/>
            <div className="chatListItem-lines">
                <div className="chatListItem-line">
                    <div className="chatListItem-name">
                        {data.name}
                    </div>
                    <div className="chatListItem-hour">
                        {data.hour}
                    </div>
                </div>
                <div className="chatListItem-line">
                    <div className="chatListItem-lastMsg">
                        <p>Olá, tudo bem?</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatListItem;