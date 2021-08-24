import React, { useState } from 'react';
import './styles.css';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function NewChat({ user, chatlist, show, setShow}) {

    const [list, setList] = useState([
        {id: 123, avatar_id: "K84vnnzxmTQ", name: 'Daraedna Menezes'},
        {id: 123, avatar_id: "K84vnnzxmTQ", name: 'Daraedna Menezes'},
        {id: 123, avatar_id: "K84vnnzxmTQ", name: 'Daraedna Menezes'},
        {id: 123, avatar_id: "K84vnnzxmTQ", name: 'Daraedna Menezes'},
    ]);

    const handleClose = () => {
        setShow(false);
    }

    return(
        <div className="newChat" style={{ display: show ? 'flex' : 'none'}}>
            <div className="newChat-head">
                <div onClick={handleClose} className="newChat-backbutton">
                    <ArrowBackIcon style={{color: '#f5f5f5'}} />
                </div>
                <div className="newChat-headtitle">
                    Nova conversa
                </div>
            </div>
            <div className="newChat-list">
                {list.map((item, key) => (
                    <div className="newChat-item" key={key}>
                        <img src={`https://source.unsplash.com/${item.avatar_id}/900x900`} alt="" className="newChat-itemavatar" />
                        <div className="newChat-itemname"> 
                            {item.name}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NewChat;