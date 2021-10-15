import React from 'react';
import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Creat Account</h2>


                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Enter Your Email" />
                    <br /> <br />
                    <input type="password" name="" id="" placeholder="Password" />
                    <br /> <br />
                    <input type="password" name="" id="" placeholder="ReEnter- Password" />
                    <br /> <br />
                    <input type="submit" value="submit" />

                </form> <br />
                <p>Already Have A Account ? <Link to="/login"> Sing-In</Link>  </p>





                <div>----------or----------- <br /><br />
                    <button className="btn-regular">Google Sing in</button>
                    <br />
                    {/* <button className="btn-regular">Email Sing in</button> */}
                </div>
            </div>

        </div>
    );
};

export default Register;