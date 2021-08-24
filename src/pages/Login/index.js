import React, { useState } from 'react';
import './styles.css';

import FacebookIcon from '@material-ui/icons/Facebook';
import api from '../../server/api';

function Login({ onReceive }) {

    const handleFacebookLogin = async () => {
        let result = await api.fbPopup();
        if(result) {
            onReceive(result.user)
        }else {
            alert("Erro!");
        }
    }

    return(
        <div className="login">
          <button onClick={handleFacebookLogin}>Entrar com 
              <FacebookIcon style={{ color: '#3b5998' }}/>
          </button>
        </div>
    )
}

export default Login;