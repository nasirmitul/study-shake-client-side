import React from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
    return (
        <div className='container sign-account'>
            <form action="" className='sign'>
                <h2 className='heading'>Login</h2>
                <p className='change-to'>Don't have an account? <Link to='/signup'>Register</Link> </p>

                <div className="inputs">
                    <input type="email" placeholder='Enter Your Email' name='email' required/>
                    <input type="password" placeholder='Type Password' name='password' required/>
                </div>

                <div className="remember-forget">
                    <div className="remember-me">
                        <input type="checkbox"/>
                        <p>Remember Me</p>
                    </div>
                    
                    <Link to='/forget'>Forget Password?</Link>
                </div>

                <div className="action-button">
                    <button type='submit'>Login</button>
                </div>
            </form>

            <div className="other-options">
                <p className='or-title'>Or Login With</p>
                <button type='button'>Login With Google</button>
                <button type='button'>Login With Github</button>
            </div>
        </div>
    );
};

export default Signin;