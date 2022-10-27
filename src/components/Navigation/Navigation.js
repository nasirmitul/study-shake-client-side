import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'

import sun from '../../images/sunBlack.png'
import moon from '../../images/moon.png'
import { AuthContext } from '../../contexts/UserContext';


const Navigation = () => {
    const [dark, setDark] = useState(false);
    const [showName, setShowName] = useState(false);
    const [hamburger, setHamburger] = useState(false)

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

                <div onClick={() => setHamburger(false)} className={`links ${hamburger ? 'active' : 'not-active'}`}>
                    <NavLink to='/home'>Home</NavLink>
                    <NavLink to='/courses'>Courses</NavLink>
                    <NavLink to='/faq'>FAQ</NavLink>
                    <NavLink to='/blog'>blog</NavLink>
                </div>

                <div onClick={() => setHamburger(false)} className={`right-panel ${hamburger ? 'active' : 'not-active'}`}>
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

                <div className="hamburger-icon" onClick={() => setHamburger(!hamburger)}>
                    <div className="line line-one"></div>
                    <div className="line line-two"></div>
                    <div className="line line-three"></div>
                </div>

            </nav>
        </div>
    );
};

export default Navigation;