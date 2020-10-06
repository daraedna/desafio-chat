import React, { useState } from 'react';
import './ChatContent.css'

import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SendIcon from '@material-ui/icons/Send';

import MessageItem from './MessageItem';
import { conversation } from '../data.json';


function ChatContent({data, user}) {

    const [list, setList] = useState(conversation);

    return (
        <div className="chatContent"> 
           <div className="chat-header"> 
                <div className="chat-header-info"> 
                    <img className="chat-header-avatar" src={`https://source.unsplash.com/${data.avatar_id}/900x900`} alt="profile"/> 
                    <div className="chat-header-name">
                        {data.name}
                    </div>
                </div>
           </div>
           <div className="chat-body"> 
                <div className="show-more"> 
                    Show Previous Message!
                </div> 

                {list.map((item, key)=> (
                    <MessageItem
                        key={key}
                        chat={item}
                        user={user}
                        contact={data.hour}
                    />
                ))}
           </div>
           <div className="chat-footer"> 
                    <div className="chat-footer-before">
                        <InsertEmoticonIcon style={{color:"rgba(0, 0, 0, 0.4)", cursor:"pointer"}}/>
                    </div>
                    <div className="chat-footer-textarea">
                        <input 
                        className="chat-footer-input" 
                        type="text"
                        placeholder="Digite uma mensagem"
                        />
                    </div>
                    <div className="chat-footer-after">
                        <div  class="background-btn"> 
                            <SendIcon fontSize="small" style={{color: "white"}}/>
                        </div>
                    </div>

           </div>
        </div>
    );
}

export default ChatContent;