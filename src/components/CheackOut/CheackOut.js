import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const CheackOut = () => {
    const { user } = useContext(AuthContext);

    const course = useLoaderData();
    const { title } = course;

    return (
        <div className='text-center mt-5 bg-dark w-75 mx-auto text-white p-5 rounded'>
            Thank you <h4>{user?.displayName}</h4> for purchase <span className='fw-bold text-primary'>{title}</span> course. Enjoy your journey. Best of luck.
        </div>
    );
};

export default CheackOut;