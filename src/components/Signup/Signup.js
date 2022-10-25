import { getAuth, updateProfile } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import app from '../../firebase/firebase.init';

const auth = getAuth(app)
const Signup = () => {

    const { createUser, googleSign } = useContext(AuthContext)
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

    return (
        <div className='container sign-account'>
            <form action="" className='sign' onSubmit={handleSubmit}>
                <h2 className='heading'>Register</h2>
                <p className='change-to'>Have an account? <Link to='/login'>Login</Link> </p>

                <div className="inputs">
                    <input type="text" placeholder='Enter your Name' name='name' required />
                    <input type="email" placeholder='Enter Your Email' name='email' required />
                    <input type="password" placeholder='Type Password' name='password' required />
                    <input type="text" placeholder='Your Image URL' name='image' required />
                </div>

                <div className="action-button">
                    <button type='submit'>Signup</button>
                </div>
            </form>

            <div className="other-options">
                <p className='or-title'>Or Signup With</p>
                <button type='button' onClick={signWithGoogle}>Signup With Google</button>
                <button type='button'>Signup With Github</button>
            </div>
        </div>
    );
};

export default Signup;