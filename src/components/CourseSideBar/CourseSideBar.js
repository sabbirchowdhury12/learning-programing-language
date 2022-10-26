import React from 'react';
import { Link } from 'react-router-dom';

const CourseSideBar = ({ course }) => {
    const { title, id } = course;
    return (
        <div className='my-3 '>
            <Link to={`courses/${id}`}>{title}</Link>
        </div>
    );
};

export default CourseSideBar;