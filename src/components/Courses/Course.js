import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {

    const { title } = course;
    return (
        <div>
            <Link>{title}</Link>
        </div>
    );
};

export default Course;