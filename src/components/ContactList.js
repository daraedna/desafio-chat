import React from 'react';
import './ContactList.css'

function ContactList({onClick, active, data}) {
    return (
        <div className={`contactList ${active?'active':''}`}
        onClick={onClick}
        >
            <img className="contactList-avatar" src={`https://source.unsplash.com/${data.avatar_id}/900x900` } alt=""/>
            <div className="contactList-info">
                <div className="contactList-name" >
                   {data.name}
                </div>
                <div className="contactList-hour" >
                   {data.hour}
                </div>
            </div>
        </div>
    );
}

export default ContactList;