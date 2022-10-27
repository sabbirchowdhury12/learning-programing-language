import React from 'react';
import { Link } from 'react-router-dom';

const CourseSideBar = ({ course }) => {
    const { title, id } = course;
    return (
        <div className='my-3 '>
            <Link className='fw-bold bg-primary bg-opacity-75 w-100 d-block text-dark text-center py-2 text-decoration-none rounded' to={`/courses/${id}`}>{title}</Link>
        </div>
    );
};

export default CourseSideBar;