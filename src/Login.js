// Coinbase login page
import React, { Component }  from 'react';
import {CoinbasePro} from 'coinbase-pro-node';
import fs from 'fs';
import './Login.css';


// We'll need the user to login using MFA.
class MoonBaseLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {user: '', password: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        if (event.target.id == "moon-user") {
            this.setState({user: event.target.value});
        }
        if (event.target.id == "moon-pass") {
            this.setState({password: event.target.value});
        }
    }

    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();

        // Lets login to coinbase!
        const fs = require('fs');
        fs.readFile('./moonbase_login.json', 'utf8', (err, jsonString) => {
            if (err) {
                console.log("Error reading file: ", err);
                return;
            }
            try {
                const authFile = JSON.parse(jsonString);
                console.log(authFile)
            } catch(err) {
                console.log(err)
            }
        });


        const auth = {

        }

        const client = new CoinbasePro(auth)
    }

    render() {
        return (
        <div class="Login">
            <div class="row display-bounds">
                <div class="row">
                    <div class="col-sm-6 mx-auto display-bounds">
                        <div class="center display-bounds" >
                            <form onSubmit={this.handleSubmit}>
                                <label  for="moon-user"> Username: </label><br></br>
                                <input class="form-control center-block" type="text" id="moon-user" name="moon-user" value={this.state.value} onChange={this.handleChange}></input><br></br>
                                <label for="moon-pass"> Password: </label><br></br>
                                <input class="form-control center-block" type="password" id="moon-pass" name="moon-pass" value={this.state.value} onChange={this.handleChange}></input><br></br>
                                <input type="submit" value="Login"></input>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}


export default MoonBaseLogin;