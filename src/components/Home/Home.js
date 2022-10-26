import React from 'react';
import { Image } from 'react-bootstrap';
import img from '../../assets/images/img.png';

const Home = () => {
    return (
        <div className='d-flex flex-column flex-md-row justify-content-between align-items-center bg-secondary p-3 text-center'>
            <div className='p-3'>
                <Image className='img-fluid' roundedCircle src={img} alt="" />
            </div>
            <div className='text-light'>
                <h2>You are welcome to learning Programming Language...</h2>
                <button type="button" className="btn btn-primary  fw-bold mt-3">Enroll Now</button>
            </div>
        </div>
    );
};

export default Home;