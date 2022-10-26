import React from 'react';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';


const Blog = () => {
    return (
        <Container className='mt-5'>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>1. What is cors?</Accordion.Header>
                    <Accordion.Body>
                        CORS is a node. js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>2. Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        <p>Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.
                        </p>
                        <p>
                            <h4>Type of Authentication:</h4>
                            <ul>
                                <li>Password-based authentication</li>
                                <li>Google, Github, facebook etc</li>
                                <li>Two-factor/multifactor authentication</li>
                                <li>Biometric authentication</li>
                                <li>Single sign-on</li>
                                <li>Certificate-based authentication</li>
                                <li>Token-based authentication</li>
                            </ul>


                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>3. How does the private route work?</Accordion.Header>
                    <Accordion.Body>
                        The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>4. What is Node? How does Node work?</Accordion.Header>
                    <Accordion.Body>
                        <p> Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. </p>

                        Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};

export default Blog;