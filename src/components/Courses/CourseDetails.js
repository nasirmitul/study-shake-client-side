import React from 'react';
import { useLoaderData } from 'react-router-dom';
import avatars from '../../images/face-avatars.png'

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

const CourseDetails = () => {
    const courseData = useLoaderData();
    const { course_id, title, short_description, about, thumbnail, authorImage, authorName, skills, student, rating, reviews, courseType, courseDuration, prerequisites, syllabus
    } = courseData || {};
    return (
        <div className='container course'>
            <div className="header">
                <div className="title-section">
                    <h3 className='course-title'>Learn {title}</h3>
                    <button className='to-pdf'>Download as PDF</button>
                </div>
                <div className="short-description">
                    <p className='course-description'>{short_description}</p>
                </div>
                <div className="author-ratings">
                    <div className="author">
                        <img src={authorImage} alt="" className="author-img" />
                        <p className="author-name">{authorName}</p>
                    </div>
                    <span>|</span>
                    <div className="ratings">
                        <p className="rating">{rating}</p>
                        <p className="reviews">({reviews} reviews)</p>
                    </div>
                </div>
                <div className="action-enroll">
                    <button className="get-access">Get Access</button>
                    <div className="enrolled">
                        <img src={avatars} alt="" />
                        <p>{student} learners enrolled</p>
                    </div>
                </div>
            </div>

            <div className="course-infos">
                <div className="level">
                    <p className="level-title">Skill level</p>
                    <p className='level-type'>{courseType}</p>
                </div>
                <div className="time">
                    <p className="time-title">Time to complete</p>
                    <p className='time-total'>Approx. {courseDuration} month</p>
                </div>
                <div className="Prerequisites">
                    <p className="Prerequisites-title">Prerequisites</p>
                    <p className='Prerequisites-types'>{prerequisites}</p>
                </div>
            </div>

            <div className="about-course-part">
                <div className="about-course">
                    <h4 className='about-course-title'>About this course</h4>
                    <p className="about-course-info">{about}</p>
                </div>
                <div className="skills-gain">
                    <h4 className='skill-gain-title'>Skills you'll gain</h4>
                    <ul>
                        {
                            skills.map(skill => <li>{skill}</li>)
                        }
                    </ul>
                </div>
            </div>

            <div className="course-thumbnail">
                <img src={thumbnail} alt="" className="thumbnail" />
            </div>

            <div className="course-syllabus">
                <Accordion allowZeroExpanded>
                    {syllabus.map((item) => (
                        <AccordionItem key={item.lesson}>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <h4 className='lesson-no'>{item.lesson}</h4>
                                    <div className="title-data">
                                        <h4 className="lesson-title">{item.title}</h4>
                                        <p className="lesson-data">{item.courseData}</p>
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className="lesson-data">{item.courseData}</p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
};

export default CourseDetails;