import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Register = () => {

    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const { createUserWithEmail, updateUserProfile } = useContext(AuthContext);

    //handle submit-------
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        // console.log(email, password, name, photoURL);

        createUserWithEmail(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUserUpadateProfile(name, photoURL);
                // handleEmailVarify();
                // toast.success('Check your email and varify');
            }).catch(error => {
                console.error(error);
                setError(error.message);
            });
    };

    // update user profile
    const handleUserUpadateProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        };
        updateUserProfile(profile)
            .then(() => { })
            .then(error => console.error(error.msg));
    };

    //check term and condition
    const handleCheck = (event) => {
        setAccepted(event.target.checked);
    };


    return (
        <div className='container bg-dark mt-5 rounded p-3 text-light'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formGroupName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPhotoUrl">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control type="text" name='photoURL' placeholder="Photo Url" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group>
                    <p className='text-danger'>{error}</p>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" onClick={handleCheck} label="Agree with our Terms and Condition." />
                </Form.Group>
                <Button className='fw-bold' disabled={!accepted} variant="primary" type="submit">
                    Register
                </Button>
                <Form.Group>
                    <p className='mt-4'>
                        If You have Already a account. Please <Link to='/login'>Login.</Link>
                    </p>
                </Form.Group>

            </Form>


        </div >
    );
};

export default Register;