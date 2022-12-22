import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../assets/images/img.png';

const Home = () => {
    return (
        <div className=''>
            <div className='d-flex flex-column flex-md-row justify-content-between align-items-center bg-primary bg-gradient p-3 text-center py-5'>
                <div className='p-3'>
                    <Image className='img-fluid' roundedCircle src={img} alt="" />
                </div>
                <div className='text-light'>
                    <h2>You are welcome to learning Programming Language...</h2>
                    <Link to='/courses'>
                        <button type="button" className="btn btn-light fw-bold mt-3">Enroll Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;