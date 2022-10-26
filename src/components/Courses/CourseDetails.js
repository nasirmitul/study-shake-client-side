import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courseData = useLoaderData();
    return (
        <div>
            <h1>{courseData.title}</h1>
        </div>
    );
};

export default CourseDetails;