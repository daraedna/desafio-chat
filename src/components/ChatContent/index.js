import React, { useState, useEffect, useRef } from 'react';
import EmojiPicker from 'emoji-picker-react';
import './styles.css';

import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SendIcon from '@material-ui/icons/Send';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CloseIcon from '@material-ui/icons/Close';
import MicIcon from '@material-ui/icons/Mic';

import MessageItem from '../MessageItem';
import { conversation } from '../../data.json';


function ChatContent({data, user}) {

    let recognition = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if(SpeechRecognition !== undefined) {
        recognition = new SpeechRecognition();
    }

    const body = useRef();

    const [list, setList] = useState(conversation);
    const [emojiOpen, setEmojiOpen] = useState(false);
    const [listening, setListening] = useState(false);
    const [text, setText] = useState('');

    const handleEmojiClick = (e, emojiObject) => {
        setText( pState => pState + emojiObject.emoji)
    }

    const handleOpenEmoji = () => {
        setEmojiOpen(true);
    }

    const handleCloseEmoji = () => {
        setEmojiOpen(false);
    }

    const handleMicClick = () => {

        if(recognition !== null) {
            recognition.onstart = () => {
                setListening(true);
            }
            recognition.onend = () => {
                setListening(false);
            }
            recognition.onresult = (e) => {
                setText(e.results[0][0].transcript);
            }
        }

        recognition.start();
    }

    const handleSendClick = () => {
        
    }

    useEffect(() => {
        if(body.current.scrollHeight > body.current.offsetHeight) {
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;
        }
    }, []);

    return (
        <div className="chatContent"> 
           <div className="chat-header"> 
                <div className="chat-header-info"> 
                    <img className="chat-header-avatar" src={`https://source.unsplash.com/${data.avatar_id}/900x900`} alt="profile"/> 
                    <div className="chat-header-name">
                        {data.name}
                    </div>
                </div>
                <div className="chat-header-buttons">
                    <div className="chat-header-btn">
                        <SearchIcon style={{color: '#f5f5f5'}} />
                    </div>
                    <div className="chat-header-btn">
                        <AttachFileIcon style={{color: '#f5f5f5'}} />
                    </div>
                    <div className="chat-header-btn">
                        <MoreVertIcon style={{color: '#f5f5f5'}} />
                    </div>
                </div>
           </div>
           <div className="chat-body" ref={body}> 
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

           <div 
            className="chat-emoji" 
            style={{height: emojiOpen ? '220px' : '0px'}}
            >
                <EmojiPicker 
                    onEmojiClick={handleEmojiClick}
                />
           </div>
           <div className="chat-footer"> 
                <div 
                    className="chat-header-btn"
                    onClick={handleCloseEmoji}
                    style={{width: emojiOpen ? '40px' : '0px'}}
                >
                    <CloseIcon style={{color:"rgba(0, 0, 0, 0.4)", cursor:"pointer"}} />
                </div>
                <div 
                    className="chat-header-btn"
                    onClick={handleOpenEmoji}
                >
                    <InsertEmoticonIcon style={{color: emojiOpen ? '#FC0042' : '#919191', cursor:"pointer"}} />
                </div>
                <div className="chat-footer-textarea">
                    <input 
                        className="chat-footer-input" 
                        type="text"
                        placeholder="Digite uma mensagem"
                        value={text}
                        onChange={e => setText(e.target.value)}
                    />
                </div>
                <div className="chat-footer-after">
                    {text === '' ?
                        <div onClick={handleMicClick} className="chat-header-btn"> 
                            <MicIcon fontSize="small" style={{color: listening ? '#FC0042' : '#919191'}}/>
                        </div>
                    :
                
                        <div onClick={handleSendClick} className="chat-header-btn"> 
                            <SendIcon fontSize="small" style={{color: '#919191'}}/>
                        </div>
                    }
                </div>

           </div>
        </div>
    );
}

export default ChatContent;