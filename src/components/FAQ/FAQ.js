import React from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => {
    return (
        <div className='container faq'>
            <ul className='table-0f-content'>
                <a href="#topic-one"><li>Why the site name is 'StudyShake'?</li></a>
                <a href="#topic-two"><li>How to get access of the courses?</li></a>
            </ul>

            <div className="topic-one topic">
                <h1 id='topic-one'>Why the site name is 'StudyShake'?</h1>
                <p>The site Name is 'StudyShake', Because in this  is site you will find core useful resource about programming</p>
            </div>
            <div className="topic-two topic">
                <h1 id='topic-two'>How to get access of the courses?</h1>
                <p>All you have to do is to go to the <Link className='go-to-the-link' to='/courses'>courses</Link> page and select a topic you want to learn. After getting into any topic you can see the full information about that course. Then you have to take the premium access to get enrolled into this course. You must have to be logged in if you want to get any course. If you aren't logged in yet, go to <Link className='go-to-the-link' to='/login'>Login</Link> page and do login</p>
            </div>
        </div>
    );
};

export default FAQ;