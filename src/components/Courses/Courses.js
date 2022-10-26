import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';
import CourseNavigation from './CourseNavigation';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div className='container courses'>
            {/* <p>This is courses page</p> */}
            {/* <div className="course-navigation">
                {
                    courses.map(course => <CourseNavigation
                        key={course.course_id}
                        course={course}
                    ></CourseNavigation>)
                }
            </div> */}
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