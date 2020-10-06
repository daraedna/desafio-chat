import React, { useState } from 'react';
import './App.css';

import ContactList from './components/ContactList';
import ChatContent from './components/ChatContent';
import ChatIntro from './components/ChatIntro';

import { contactsList } from './data.json';

import MenuIcon from '@material-ui/icons/Menu';

function App() {


  const [contacts, setContancts] = useState(contactsList);
  const [activeChat, setActiveChat] = useState(contactsList);
  const [user, setUser] = useState({
      id: 1000
  })

  return (
    <div className="app">
        <div className="sidebar"> 
          <header>
            <div className="menu">
              <MenuIcon fontSize="inherit"/>
            </div>
          </header>

          <div className="search">
            <div className="search-input"> 
              <input type="search" placeholder="Buscar"/> 
            </div>
          </div>

          <div className="contacts"> 
            {contacts.map((item, key)=> (
              <ContactList
                key={key}
                data={item}
                active={activeChat.id === contacts[key].id}
                onClick={()=>setActiveChat(contacts[key])}
              />
            ))}
          </div>
        </div>

        <div> 
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
