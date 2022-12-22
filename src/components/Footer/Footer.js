import React from 'react';
import { Card } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </div>
    );
};

export default Footer;