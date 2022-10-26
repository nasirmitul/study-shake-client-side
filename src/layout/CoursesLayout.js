import React from 'react';
import { Outlet } from 'react-router-dom';
import CourseNavigation from '../components/Courses/CourseNavigation';
import './layout.css'

const CoursesLayout = () => {
    return (
        <div className='course-layout container'>
            <div className="course-navigation">
                <CourseNavigation></CourseNavigation>
            </div>
            <div className="other-content">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default CoursesLayout;