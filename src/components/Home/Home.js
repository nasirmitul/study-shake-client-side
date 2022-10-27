import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import man from '../../images/manwithlaptop.png'

import programming from '../../images/programming_icon.png'
import quality from '../../images/growth.png'
import Course from '../Courses/Course';

import heart from '../../images/heart.png'
import growth from '../../images/growth.png'
import thunder from '../../images/thunder.png'

import { AuthContext } from '../../contexts/UserContext';



const Home = () => {

    const {user} = useContext(AuthContext);
    // console.log(user.email);

    const courses = useLoaderData();
    console.log(courses);
    return (
        <div className='container home'>
            <div className="home-header">
                <div className="header-title">
                    <h1>Start Learning from best <span>Platform</span> with best <span>Instructors</span></h1>
                </div>
                <div className="header-description">
                    <p>Receive new course material in future update automatically in your inbox by joining this course.</p>
                </div>

                <div className="action-buttons">
                    <Link to='/courses'><button className="my-button">Check Courses</button></Link>
                    <Link to='/blog'><button className="my-button-second">Check Blog</button></Link>
                </div>

                <div className="header-image">
                    <div className="programming-course">
                        <img src={programming} alt="" />
                        <p>Programming Courses</p>
                    </div>
                    <div className="quality-course">
                        <img src={quality} alt="" />
                        <p>Quality Courses</p>
                    </div>
                    <img className='man-image' src={man} alt="" />
                </div>
            </div>

            <div className='courses courses-home'>
                <div className="courses-home-title">
                    <h2>Check Out Our Courses</h2>
                </div>
                <div className="all-courses">
                    {
                        courses.map(course => <Course
                            key={course.course_id}
                            course={course}
                        ></Course>)
                    }
                </div>
            </div>

            <div className="connect">
                <div className="images">
                    <img className='heart' src={heart} alt="" />
                    <img className='growth' src={growth} alt="" />
                    <img className='thunder' src={thunder} alt="" />
                </div>
                <h2 className='connect-title'>Connect with us and get the best programming course we offer</h2>
                <p className='connect-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, magni.</p>

                <div>
                    {
                        user ? <Link to='/courses'><button className="my-button">
                        Get Connected
                    </button></Link> : <Link to='/login'><button className="my-button">
                    Get Connected
                </button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;