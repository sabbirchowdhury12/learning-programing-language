import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const FAQPage = () => {
    return (
        <Container className='mt-5'>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>1. What is React?</Accordion.Header>
                    <Accordion.Body >
                        A JavaScript library for building user interfaces
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>2. What is context Api?</Accordion.Header>
                    <Accordion.Body >
                        Context is a built-in API introduced in  React 16.3. It makes it possible to pass data from parent to children nested deep down the component tree directly, instead of passing it down through a chain of props.

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>3. What is props?</Accordion.Header>
                    <Accordion.Body>
                        Props are arguments passed into React components.
                        Props are passed to components via HTML attributes.
                        props stands for properties.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>4.What Is Express JS In Node JS?</Accordion.Header>
                    <Accordion.Body >
                        Node JS is a fast JavaScript runtime environment that we use to build server-side applications, but it does not know how to perform serving files, handling requests, and handling HTTP methods, so this is where express js comes in.

                        Express JS is a Node.js framework designed to build API's web applications cross-platform mobile apps quickly and make node js easy.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>5. Different between authentication and authorization?</Accordion.Header>
                    <Accordion.Body >
                        Authentication:
                        <ul>
                            <li>Authentication verifies who the user is.	</li>
                            <li>Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.	</li>
                            <li>Authentication is the first step of a good identity and access management process.	</li>
                            <li>Authentication is visible to and partially changeable by the user.	</li>
                        </ul>
                        <br />
                        Authorization:
                        <ul>
                            <li>Authorization determines what resources a user can access.
                            </li>
                            <li>Authorization works through settings that are implemented and maintained by the organization.
                            </li>
                            <li>Authorization always takes place after authentication.
                            </li>
                            <li>Authorization isn't visible to or changeable by the user.
                            </li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>5. What is SPA (Single-page application)?</Accordion.Header>
                    <Accordion.Body  >
                        An SPA (Single-page application) is a web app implementation that loads only a single web document, and then updates the body content of that single document via JavaScript APIs such as XMLHttpRequest and Fetch when different content is to be shown.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};

export default FAQPage;