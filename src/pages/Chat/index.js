import React, { useState, useEffect } from 'react';
import './styles.css';

import ChatListItem from '../../components/ChatListItem';
import ChatContent from '../../components/ChatContent';
import ChatIntro from '../../components/ChatIntro';
import NewChat from '../../components/NewChat';
import Login from '../Login';

import { chatList } from '../../data.json';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

function App() {

  const [chatlist, setChatlist] = useState(chatList);
  const [activeChat, setActiveChat] = useState(chatList);
  const [user, setUser] = useState(null)
  const [showNewChat, setShowNewChat] = useState(false);

  const handleNewChat = () => {
    setShowNewChat(true);
  }

  const handleLoginData = async (u) => {
    let newUser = {
      id: u.id, 
      name: u.displayName, 
      avatar_id: u.photoURL
    }
    setUser(newUser);
  }

  if(user === null) {
    return <Login onReceive={handleLoginData} />
  }

  return (
    <div className="app">
        <div className="sidebar"> 
          <NewChat 
            user={user}
            chatList={chatList}
            show={showNewChat}
            setShow={setShowNewChat}
          />
          <header>
            <img className="header-avatar" src="https://decide.belem.pa.gov.br/assets/decidim/default-avatar-43686fd5db4beed0141662a012321bbccd154ee1d9188b0d1f41e37b710af3cb.svg" alt="avatar" />
            <div className="header-buttons">
              <div className="header-btn">
                <DonutLargeIcon style={{color: '#f5f5f5'}} />
              </div>
              <div onClick={handleNewChat} className="header-btn">
                <ChatIcon style={{color: '#f5f5f5'}} />
              </div>
              <div className="header-btn">
                <MoreVertIcon style={{color: '#f5f5f5'}} />
              </div>
            </div>
          </header>

          <div className="search">
            <div className="search-input"> 
              <SearchIcon  fontSize="small" style={{color: '#919191'}}/>
              <input type="search" placeholder="Buscar uma conversa"/> 
            </div>
          </div>

          <div className="chatlist"> 
            {chatlist.map((item, key)=> (
              <ChatListItem
                key={key}
                data={item}
                active={activeChat.id === chatlist[key].id}
                onClick={()=>setActiveChat(chatlist[key])}
              />
            ))}
          </div>
        </div>

        <div className="content-area"> 
            {activeChat.id !== undefined &&
              <ChatContent
                data={activeChat}
                user={user}
              />
            }

            {activeChat.id === undefined &&
              <ChatIntro/>
            }

        </div>
     </div>
  );
}

export default App;
