import React from 'react';
import { useState } from 'react';
import { InputGroup } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FcIdea } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import './NavBar.module.css';

const NavBar = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    };


    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <FcIdea className='h-8' />
                    Learn-Programming-Languages</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to='/' > Home</Link>
                        <Link to='/' > Courses</Link>
                        <Link to='/' > FAQ</Link>
                        <Link to='/' > Blog</Link>
                        <Link to='/login' > Login</Link>
                        <Link to='/register' > Register</Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>


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