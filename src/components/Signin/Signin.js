import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Signin = () => {
    const { loginUser, googleSign, githubSign } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        loginUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch((error) => {
                console.log(error);
            })
    }


    const signWithGoogle = () => {
        googleSign()
            .then((result) => {
                const user = result.user;
                console.log(user);
            }).catch((error) => {
                console.log(error);
            });

    }

    const signWithGitHub = () => {
        githubSign()
            .then((result) => {
                const user = result.user;
                console.log(user);
            }).catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className='container sign-account'>
            <form action="" className='sign' onSubmit={handleSubmit}>
                <h2 className='heading'>Login</h2>
                <p className='change-to'>Don't have an account? <Link to='/signup'>Register</Link> </p>

                <div className="inputs">
                    <input type="email" placeholder='Enter Your Email' name='email' required />
                    <input type="password" placeholder='Type Password' name='password' required />
                </div>

                <div className="remember-forget">
                    <div className="remember-me">
                        <input type="checkbox" />
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
                <button type='button' onClick={signWithGoogle}>Signup With Google</button>
                <button type='button' onClick={signWithGitHub}>Signup With Github</button>
            </div>
        </div>
    );
};

export default Signin;