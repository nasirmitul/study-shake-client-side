import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='container sign-account'>
            <form action="" className='sign'>
                <h2 className='heading'>Register</h2>
                <p className='change-to'>Have an account? <Link to='/login'>Login</Link> </p>

                <div className="inputs">
                    <input type="text" placeholder='Enter your Name' name='name' required/>
                    <input type="email" placeholder='Enter Your Email' name='email' required/>
                    <input type="password" placeholder='Type Password' name='password' required/>
                    <input type="text" placeholder='Your Image URL' name='image' required/>
                </div>

                <div className="action-button">
                    <button type='submit'>Signup</button>
                </div>
            </form>

            <div className="other-options">
                <p className='or-title'>Or Signup With</p>
                <button type='button'>Signup With Google</button>
                <button type='button'>Signup With Github</button>
            </div>
        </div>
    );
};

export default Signup;