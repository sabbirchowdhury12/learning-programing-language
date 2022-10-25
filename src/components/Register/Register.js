import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Register = () => {
    const [accepted, setAccepted] = useState(false);
    const { createUserWithEmail, updateUserProfile } = useContext(AuthContext);

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
                form.reset();
                // handleUserProfile(name, photoURL);
                // handleEmailVarify();
                // toast.success('Check your email and varify');
            }).catch(err => console.log(err));
    };

    const handleCheck = (event) => {
        setAccepted(event.target.checked);
    };
    return (
        <div className='container bg-secondary mt-5 rounded p-3 text-light'>
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
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" onClick={handleCheck} label="Check me out" />
                </Form.Group>
                <Button disabled={!accepted} variant="primary" type="submit">
                    Register
                </Button>
            </Form>


        </div >
    );
};

export default Register;