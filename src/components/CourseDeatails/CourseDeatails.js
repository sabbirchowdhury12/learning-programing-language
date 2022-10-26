import React from 'react';
import { Container } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ImFilePdf } from 'react-icons/im';


const CourseDeatails = () => {
    const course = useLoaderData();

    const { id, img, title, desc, price } = course;
    return (
        <Container>
            <div className='w-75 mx-auto mt-5 bg-dark text-white p-2 rounded'>
                <Card.Header className='text-end mb-1'><ImFilePdf style={{ height: '30px' }} /></Card.Header>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Language: {title}</Card.Title>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                    <Card.Text>
                        You can access this course only for <span className='fw-bold'>${price}</span>
                    </Card.Text>
                    <Link to={`/checkout/${id}`}><Button variant="primary">Get Premium Access</Button></Link>
                </Card.Body>
            </div>
        </Container>
    );
};

export default CourseDeatails;