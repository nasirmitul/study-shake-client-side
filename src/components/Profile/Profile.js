import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Profile = () => {
    const navigate = useNavigate();

    const { logoutUser } = useContext(AuthContext);

    const handleLogOut = () => {
        logoutUser()
            .then(() => { })
            .catch((error) => console.log(error))
    }


    return (
        <div className='container'>
            <h1>This is profile</h1>
            <button className='my-button' onClick={handleLogOut}>Logout</button>
        </div>
    );
};

export default Profile;