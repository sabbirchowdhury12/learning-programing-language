import React from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const CourseCard = ({ course }) => {

    const { id, title, desc, img, price } = course;

    return (

        <Col lg={4} md={6}>
            <Card className="my-3 bg-dark text-light text-center">
                <Card.Header>Featured</Card.Header>
                <Card.Img height={'200px'} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {desc.slice(0, 100) + '...'}
                    </Card.Text>
                    <Link to={`/courses/${id}`}><Button variant="primary">
                        Show Details
                    </Button></Link>
                </Card.Body>
                <Card.Footer >Enroll Fee: ${price}</Card.Footer>
            </Card>

        </Col>
    );
};

export default CourseCard;