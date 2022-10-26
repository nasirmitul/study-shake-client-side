import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import avatars from '../../images/face-avatars.png'
import star from '../../images/star.png'
import level from '../../images/diagram.png'
import time from '../../images/time.png'
import prerequisite from '../../images/task.png'

import jsPDF from 'jspdf';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';


const CourseDetails = () => {
    const courseData = useLoaderData();
    // console.log(courseData);

    const { course_id, title, short_description, about, thumbnail, authorImage, authorName, skills, student, rating, reviews, courseType, courseDuration, prerequisites, syllabus
    } = courseData || {};

    const generatePdf = () => {
        const doc = new jsPDF('p', 'pt', 'a4')

        doc.html(document.querySelector("#course-detail"), {
            callback: function (pdf) {
                pdf.save(`${title}.pdf`);
            }
        })

    }


    return (
        <div className='course-detail' id='course-detail'>
            <div className="header">
                <div className="title-section">
                    <h3 className='course-title'>Learn {title}</h3>

                    <button className='to-pdf my-button' onClick={generatePdf}>Download as PDF</button>
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
                        <img src={star} alt="" />
                        <p className="rating">{rating}</p>
                        <p className="reviews">({reviews} reviews)</p>
                    </div>
                </div>
                <div className="action-enroll">
                    <Link to={`/courses/course/checkout/${course_id}`}>
                        <button className="get-access my-button">Get Premium Access</button>
                    </Link>

                    <div className="enrolled">
                        <img src={avatars} alt="" />
                        <p><span>{student}</span> learners enrolled</p>
                    </div>
                </div>
            </div>

            <div className="course-infos">
                <div className="level">
                    <img src={level} alt="" />
                    <div className="skill-info">
                        <p className="course-info-title">Skill level</p>
                        <p className='course-info-data'>{courseType}</p>
                    </div>
                </div>
                <div className="time">
                    <img src={time} alt="" />
                    <div className="time-info">
                        <p className="course-info-title">Time to complete</p>
                        <p className='course-info-data'>Approx. {courseDuration} month</p>
                    </div>
                </div>
                <div className="Prerequisites">
                    <img src={prerequisite} alt="" />
                    <div className="prerequisite-info">
                        <p className="course-info-title">Prerequisites</p>
                        <p className='course-info-data'>{prerequisites}</p>
                    </div>
                </div>
            </div>

            <div className="about-course-part">
                <div className="about-course">
                    <h4 className='about-course-title'>About this course</h4>
                    <p className="about-course-info">{about}</p>
                </div>
                <div className="skills-gain">
                    <h4 className='skill-gain-title'>Skills you'll gain</h4>
                    <ul className='skill-gain-info'>
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
                <div className="syllabus-title">
                    <h3 className='syllabus-title'>syllabus</h3>
                    <p>{syllabus.length} lessons</p>
                </div>
                <Accordion allowZeroExpanded>
                    {syllabus.map((item) => (
                        <AccordionItem className='accordion-item' key={item.lesson}>
                            <AccordionItemHeading>
                                <AccordionItemButton className='accordion-button'>
                                    <h4 className='lesson-no'>{item.lesson}</h4>
                                    <div className="title-data">
                                        <h4 className="lesson-title">{item.title}</h4>
                                        <p className="lesson-data">{item.courseData}</p>
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className='accordion-item-panel'>
                                <p className="lesson-data">{item.courseData}</p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
            <Link to={`/courses/course/checkout/${course_id}`}>
                <button className="get-access-bottom my-button">Get Premium Access</button>
            </Link>

        </div >
    );
};

export default CourseDetails;