import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle,  FaGithub, FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Qzone from '../Qzone/Qzone';

const RightNav = () => {
    return (
        <div>
            <h4>Login with</h4>
            <Button className='mb-3' variant="primary"><FaGoogle /> Login with Google</Button>
            <Button variant="secondary"><FaGithub /> Login with Github</Button>
            <div className='mb-3'>
            <ListGroup className='mt-3'>
                <ListGroup.Item disabled><FaFacebook /> Facebook</ListGroup.Item>
                <ListGroup.Item><FaSquareXTwitter /> X</ListGroup.Item>
                <ListGroup.Item><FaInstagramSquare /> Instagram</ListGroup.Item>
            </ListGroup>
            </div>
            <Qzone />
        </div>
    );
};

export default RightNav;