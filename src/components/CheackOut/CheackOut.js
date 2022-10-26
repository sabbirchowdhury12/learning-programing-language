import { useLoaderData } from 'react-router-dom';

const CheackOut = () => {

    const course = useLoaderData();

    return (
        <div>
            Thank You. You are successfully access {course.title} course
        </div>
    );
};

export default CheackOut;