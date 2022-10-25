import React from 'react';
import { Link } from 'react-router-dom';

const ForgetPass = () => {
    return (
        <div className='container sign-account'>
            <form action="" className='sign'>
                <h2 className='heading'>Forget Password?</h2>
                <p className='change-to'>Do remember email & password? <Link to='/login'>Login</Link> </p>

                <div className="inputs">
                    <input type="email" placeholder='Enter Your Email' name='email' required/>
                </div>


                <div className="action-button">
                    <button className='sign-to-account' type='submit'>Forget Password</button>
                </div>
            </form>

        </div>
    );
};

export default ForgetPass;