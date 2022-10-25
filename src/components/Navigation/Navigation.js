import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import man from '../../images/man.jpg'

import sun from '../../images/sun.png'
import moon from '../../images/moon.png'


const Navigation = () => {
    const [dark, setDark] = useState(false);

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
                    <div className="profile">
                        <Link to='/signup'>
                            <img src={man} alt="" />
                        </Link>
                        
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;