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
import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle';


const NavBar = () => {
    const [toggle, setToggle] = useState(false);
    const [mode, setMode] = useState('dark');
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

        <Navbar collapseOnSelect expand="lg" bg="light" className='shadow-lg' variant="light">
            <Container>
                <Link to='/' >
                    <Navbar.Brand>
                        <FcIdea className='pb-2' style={{ height: '40px' }} /> <span className='fw-bold'> Learn-programming </span>
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to='/courses' > Courses</Link>
                        <Link to='/faq' > FAQ</Link>
                        <Link to='/blog' > Blog</Link>
                        {
                            user?.uid ? <Button onClick={handleLogOut} variant='dark' className='fw-bold ms-2 p-1'>Log Out</Button> :
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


                        <Link to='/'>
                            <DarkModeToggle
                                mode={mode}
                                dark="Dark"
                                light="Light"
                                size="sm"
                                inactiveTrackColor="#e2e8f0"
                                inactiveTrackColorOnHover="#f8fafc"
                                inactiveTrackColorOnActive="#cbd5e1"
                                activeTrackColor="#334155"
                                activeTrackColorOnHover="#1e293b"
                                activeTrackColorOnActive="#0f172a"
                                inactiveThumbColor="#1e293b"
                                activeThumbColor="#e2e8f0"
                                onChange={(mode) => {
                                    setMode(mode);
                                }}
                            />
                        </Link>



                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default NavBar;