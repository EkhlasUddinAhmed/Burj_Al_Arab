import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Login = () => {

    const {googleSignIn}=useAuth();
    const location=useLocation();
    const navigate=useNavigate();
    const Redirect_URL=location.state?.from || "/home"

    const googleSignInHandle=()=>{
        googleSignIn()
        .then((result) => {
            const user = result.user;
            console.log(user);
            navigate(Redirect_URL,{replace:true})
          })
          .catch((error) => {});
    }
    return (
        <div>
            <h1>This is Login</h1>
            <button onClick={googleSignInHandle}>GoogleLogIn</button>
        </div>
    );
};

export default Login;