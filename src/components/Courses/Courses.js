import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div className='container'>
            {
                courses.map(course => <Course
                key={course.course_id}
                course={course}
                ></Course>)
            }
        </div>
    );
};

export default Courses;