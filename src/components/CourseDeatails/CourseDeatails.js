import React from 'react';
import { Container } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ImFilePdf } from 'react-icons/im';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';


const CourseDeatails = () => {

    const course = useLoaderData();
    const { id, img, title, desc, price } = course;

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current
    });


    return (
        <Container>
            <div className='w-75 mx-auto my-5 bg-dark text-white p-3 rounded'>
                <button onClick={handlePrint} className='btn btn-outline-none bg-transparent ms-auto mb-1 text-white '>
                    <Card.Header>pdf <ImFilePdf style={{ height: '30px' }} /></Card.Header>
                </button>

                <div ref={componentRef}>
                    <Card.Img height={'400px'} variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className=' fw-bold my-3'>Language: {title}</Card.Title>
                        <Card.Text >
                            {desc}
                        </Card.Text>
                        <Card.Text>
                            You can access this course only for <span className='fw-bold fs-4'>${price}</span>
                        </Card.Text>
                        <Link to={`/checkout/${id}`}><Button variant="primary">Get Premium Access</Button></Link>
                    </Card.Body>
                </div>
            </div>
        </Container>
    );
};

export default CourseDeatails;