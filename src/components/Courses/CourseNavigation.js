import React from 'react';
import { Link } from 'react-router-dom';

const CourseNavigation = ({course}) => {
    const {course_id, title} = course || {};
    return (
        <div>
            <Link to={`/courses/course/${course_id}`}>{title}</Link>
        </div>
    );
};

export default CourseNavigation;