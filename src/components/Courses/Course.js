import React from 'react';
import { Link } from 'react-router-dom';
import star from '../../images/star.png'

const Course = ({ course }) => {

    const { course_id, title, thumbnail, authorImage, authorName, skills, rating, reviews, courseType, CourseDuration } = course || {};
    return (
        <div>
            <Link className='single-course' to={`/courses/course/${course_id}`}>
                <div className="course-card">
                    <img className='course-thumbnail' src={thumbnail} alt="" />
                    <div className="author-info">
                        <img src={authorImage} alt="" className="author-img" />
                        <p className="author-name">{authorName}</p>
                    </div>
                    <h3 className="course-title">{title}</h3>
                    <p className="skills-gain">
                        <span>Skills you will gain:</span>
                        <div className="all-skill-name">
                            {skills.map(skill => <p className='skill-name'>{skill}</p>)}
                        </div>
                    </p>
                    <div className="course-card-footer">
                        <div className="ratings">
                            <img className='star' src={star} alt="" />
                            <p className="rating">{rating}</p>
                            <p className="reviews">({reviews} reviews)</p>
                        </div>

                        <div className="course-type-duration">
                            <p className='type-duration'>{courseType} <span>.</span> {CourseDuration}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Course;