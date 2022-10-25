import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import man from '../../images/man.jpg'

import sun from '../../images/sun.png'
import moon from '../../images/moon.png'
import { AuthContext } from '../../contexts/UserContext';


const Navigation = () => {
    const [dark, setDark] = useState(false);
    const [showName, setShowName] = useState(false);

    const { user } = useContext(AuthContext)

    return (
        <div className='navigation'>
            <nav className='top-navigation'>
                <div className="logo">
                    <NavLink to='/'>
                        <img src={logo} alt="" />
                        <p>StudyShake</p>
                    </NavLink>
                </div>

                <div className="links">
                    <NavLink to='/home'>Home</NavLink>
                    <NavLink to='/courses'>Courses</NavLink>
                    <NavLink to='/faq'>FAQ</NavLink>
                    <NavLink to='/blog'>blog</NavLink>
                </div>

                <div className="right-panel">
                    <div className="theme-change" onClick={() => setDark(!dark)}>
                        {
                            dark ? <img src={sun} alt="" /> : <img src={moon} alt="" />
                        }
                    </div>


                    <div className="log-profile">
                        {
                            !user ? <Link to='/login'><button className='navigation-login' type='button'> Login</button></Link> :
                                <div className="profile">
                                    <Link className='user-profile' to='/profile'>
                                        <img onMouseEnter={() => setShowName(true)} onMouseLeave={() => setShowName(false)} src={user?.photoURL} alt="" />
                                        <div className={`user-name ${showName ? 'show-name' : 'hide-name'}`}>
                                            {
                                                showName ? user?.displayName : ''
                                            }
                                        </div>
                                    </Link>
                                </div>
                        }
                    </div>

                </div>
            </nav>
        </div>
    );
};

export default Navigation;