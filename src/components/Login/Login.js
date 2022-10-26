import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';




const Login = () => {

    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const { loginWithEmail, signWithGoogle } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginWithEmail(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true });
            }).catch(error => {
                console.error(error);
                setError(error.message);
            });
    };

    const handleWithGoogle = () => {
        signWithGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            }).catch(error => console.error(error));
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
                <Form.Group>
                    <p className='text-danger'>{error}</p>
                </Form.Group>

                <div className='text-center'>
                    <Button variant="outline-primary" className='w-50 my-2 fw-bold text-light' type="submit">
                        Login
                    </Button>
                    <br />
                    <Button onClick={handleWithGoogle} variant="outline-primary" className='w-50 my-2 fw-bold text-light'><FaGoogle /> Login with Google</Button>
                    <br />
                    <Button variant="outline-primary" className='w-50 my-2 fw-bold text-light'><FaGithub /> Login with Github</Button>
                </div>

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