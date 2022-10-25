import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';


const Login = () => {
    const { loginWithEmail } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginWithEmail(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            }).catch(err => console.log(err));
    };

    return (
        <div className='container bg-dark mt-5 rounded p-3 text-light'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>

                <Button className='fw-bold' variant="primary" type="submit">
                    Login
                </Button>

                <Form.Group>
                    <p className='mt-4'>
                        If you don't have any account. Please <Link to='/register'>Register.</Link>
                    </p>
                </Form.Group>
            </Form>

        </div>
    );
};

export default Login;