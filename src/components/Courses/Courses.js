import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CourseCard from '../CourseCard/CourseCard';
import CourseSideBar from '../CourseSideBar/CourseSideBar';
import './Course.module.css';

const Courses = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);
    return (
        <Container className='mt-5'>
            <Row>
                <Col md={4}>

                    {
                        courses.map(course => <CourseSideBar key={course.id} course={course}></CourseSideBar>)
                    }

                </Col>
                <Col md={8}>
                    <Row>

                        {
                            courses.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
                        }
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;