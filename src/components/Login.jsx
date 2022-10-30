import { GoogleLogin } from "react-google-login"
import GlobalVar from "./GlobalVar"

const client_id = "267248897616-19psskd0oi6vph8861p5874heokev1lm.apps.googleusercontent.com"

function Login(props){

    const onSuccess = (res) => {
        // console.log("Login Success!! Current User: ", res.profileObj);
        process.env.REACT_APP_email = res.profileObj.email;
        // console.log(res.profileObj.email);


        // console.log("Email is: ", res.profileObj.email);
    }

    const onFailure = (res) => {
        // console.log("Login Failed!! res: ", res);
    }

    return(
        <div id="signInButton">
            <GoogleLogin
                clientId={client_id}
                buttonText = "Signup with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}

export default Login;