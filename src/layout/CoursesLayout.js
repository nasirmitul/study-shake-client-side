import React from 'react';
import { Outlet } from 'react-router-dom';
import CourseNavigation from '../components/Courses/CourseNavigation';

const CoursesLayout = () => {
    return (
        <div>
            <CourseNavigation></CourseNavigation>
            <Outlet></Outlet>
        </div>
    );
};

export default CoursesLayout;