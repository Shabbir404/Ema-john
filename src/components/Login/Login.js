import React from 'react';
import { Link } from "react-router-dom";
import useFirebase from '../../hooks/UseFirebase';
import './Login.css'




const Login = () => {

    const { user, singInWithGoogle } = useFirebase();

    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>


                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Enter Your Email" />
                    <br /> <br />
                    <input type="password" name="" id="" placeholder="Password" />
                    <br /> <br />
                    <input type="submit" value="submit" />
                </form> <br />
                <p>New To ema-john ? <Link to="/ragister"> Creat Account </Link>  </p>
                <br />



                <div>----------or----------- <br /><br />
                    <button onClick={singInWithGoogle} className="btn-regular">Google Sing in</button>
                    <br />
                    {/* <button className="btn-regular">Email Sing in</button> */}
                </div>
            </div>

        </div>
    );
};

export default Login;