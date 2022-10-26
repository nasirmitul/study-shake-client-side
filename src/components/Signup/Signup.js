import { getAuth, updateProfile } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import app from '../../firebase/firebase.init';

import google from '../../images/google.png'
import github from '../../images/github.png'

const auth = getAuth(app)
const Signup = () => {

    const { createUser, googleSign, githubSign } = useContext(AuthContext)
    
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'; 



    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const image = form.image.value;

        console.log(name, email, password, image);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: image
                }).then(() => {
                    console.log('profile updated');
                }).catch((error) => {
                    console.log(error);
                });

                form.reset();
                navigate(from, {replace: true});
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
                navigate(from, {replace: true});
            }).catch((error) => {
                console.log(error);
            });

    }

    const signWithGitHub = () => {
        githubSign()
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, {replace: true});
            }).catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className='container sign-account'>
            <form action="" className='sign' onSubmit={handleSubmit}>
                <h2 className='heading'>Create new account<span>.</span></h2>
                <p className='change-to'>Have an account? <Link to='/login'>Login</Link> </p>

                <div className="inputs">
                    <input type="text" placeholder='Enter your Name' name='name' required />
                    <input type="email" placeholder='Enter Your Email' name='email' required />
                    <input type="password" placeholder='Type Password' name='password' required />
                    <input type="text" placeholder='Your Image URL' name='image' required />
                </div>

                <div className="action-button">
                    <button className='sign-to-account' type='submit'>Signup</button>
                </div>
            </form>

            <div className="other-options">
                <p className='or-title'>Or Signup With</p>

                <div className="google-github">
                    <div className="google-sign-button">

                    </div>
                    <button type='button' className='google-sign' onClick={signWithGoogle}>
                        <img src={google} alt="" />
                        Signup With Google
                    </button>
                    <button type='button' className='github-sign' onClick={signWithGitHub}>
                        <img src={github} alt="" />
                        Signup With Github
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Signup;