import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <Container>
            <h2>Our Terms and Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias qui nulla obcaecati voluptatibus cupiditate ea dolores hic. Animi vero deserunt a? Tempore aliquid ipsum minus id deserunt nihil alias!</p>
            <p>Go back to Register <Link to='/register'>Register</Link></p>
        </Container>
    );
};

export default TermsAndConditions;