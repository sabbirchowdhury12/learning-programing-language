import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const CheackOut = () => {
    const { user } = useContext(AuthContext);

    const course = useLoaderData();
    const { title } = course;

    return (
        <div className='text-center mt-5 bg-dark w-75 mx-auto text-white p-5 rounded'>
            Thank you <h3>{user?.displayName}</h3> for purchase <span className='fw-bold text-primary fs-3'>{title}</span> course. Enjoy your journey. Best of luck.
        </div>
    );
};

export default CheackOut;