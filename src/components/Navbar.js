import React from 'react';
import "./CSS/navbar.css";
import Login from './Login';
import { gapi } from 'gapi-script';
import { useEffect } from 'react';

var client_id = "267248897616-19psskd0oi6vph8861p5874heokev1lm.apps.googleusercontent.com";

function Navbar(props) {

    useEffect(() => {
        function start(){
            gapi.client.init({
                client_id: client_id,
                scope: ""
            })
        };

        gapi.load('client:auth2', start);
        // var accessToken = gapi.auth.getToken().access_token;
    });


    // console.log(accessToken);

  return (
    <div id='nav-body'>
        <div id="title-box">
            <div id="title">
                <h2 id="indian">Indian</h2>
                <h2 id="chilli">Chilli</h2>
            </div>
            {/* <div id="tagline">
                <h5>
                    Tasty, Healthy food for your loved ones.
                </h5>
            </div> */}
        </div>

        <div id="options">
            <div className="option"><div>Home</div><div className="border"></div></div>
            <div className="option">About</div>
            <div className="option">Safety & Hygiene</div>
            <div className="option">Contact</div>
        </div>
            <Login email = {props.email}/>
    </div>
  )
}

export default Navbar