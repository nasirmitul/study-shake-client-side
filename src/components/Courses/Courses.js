import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';

const Courses = () => {
    const courses = useLoaderData();
    // console.log(courses);
    
    return (
        <div className='courses'>            
            <div className="all-courses">
                {
                    courses.map(course => <Course
                        key={course.course_id}
                        course={course}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;