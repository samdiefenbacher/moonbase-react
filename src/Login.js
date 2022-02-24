// Coinbase login page
import React, { Component }  from 'react';
import {CoinbasePro} from 'coinbase-pro-node';
const client = new CoinbasePro();

// We'll need the user to login using MFA.
function Login(){
    
    return (
    <div class="row display-bounds">
        {loginUserPass()}    
    </div>
    )
} 

function loginUserPass() {
    return (
    <div>
        SHEEEESH
    </div>
    )
}

export default Login;