import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CourseNavigation = () => {

    const [courseData, setCourseData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourseData(data))
    }, [])

    console.log(courseData);

    return (
        <div className='course-navigations'>
            {
                courseData.map(course => <Link className='course-title' to={`/courses/course/${course.course_id}`} key={course.course_id}>{course.title} <br /></Link>)
            }
        </div>
    );
};

export default CourseNavigation;