import React, { useContext } from 'react';
import { useState } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { FcIdea } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import './NavBar.module.css';

const NavBar = () => {
    const [toggle, setToggle] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {

            }).catch(err => console.error(err));
    };

    const handleToggle = () => {
        setToggle(!toggle);
    };


    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to='/'>
                    <Navbar.Brand>
                        <FcIdea className='h-8' />
                        Learn-Programm</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to='/' > Home</Link>
                        <Link to='/courses' > Courses</Link>
                        <Link to='/faq' > FAQ</Link>
                        <Link to='/blog' > Blog</Link>
                        {
                            user?.uid ? <Button onClick={handleLogOut} variant='light' className='fw-bold ms-2 p-1'>Log Out</Button> :
                                <>
                                    <Link to='/login' > Login</Link>
                                    <Link to='/register' > Register</Link>
                                </>
                        }


                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">
                            {
                                user?.photoURL ? <Image title={`${user.displayName}`} style={{ height: '30px' }} roundedCircle src={user.photoURL} /> : <FaUser />
                            }
                        </Nav.Link>


                        <Nav.Link eventKey={2} href="#memes">

                            <span className="form-check form-switch">
                                <input onClick={handleToggle} className="form-check-input" type="checkbox" role="switch" />
                                <label htmlFor="">{toggle ? 'Dark' : 'Light'}</label>
                            </span>

                        </Nav.Link>



                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default NavBar;