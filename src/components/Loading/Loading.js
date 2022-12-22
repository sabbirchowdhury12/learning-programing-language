import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='d-flex m-5 h-full justify-content-between align-items-center'>
            <Spinner className='m-5' animation="border" variant="danger" />
        </div>
    );
};

export default Loading;