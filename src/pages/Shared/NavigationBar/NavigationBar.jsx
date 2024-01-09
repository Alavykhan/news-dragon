import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { AuthContext } from '../../../provider/AuthProvider';

const NavigationBar = () => {
    const {user, logOut} = useContext(AuthContext)

    const handleLogOut = () =>{
        logOut()
        .then()
        .catch(error=>console.log(error))
    }

    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary mt-3">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto">
                        <Link to='/category/0'>Home</Link>
                    
                    <Nav.Link href="#pricing">About</Nav.Link>
                    <Nav.Link href="#pricing">Career</Nav.Link>
                </Nav>
              
                <p><FaUser style={{fontSize: '2rem'}} /></p>
                {
                    user? <Button onClick={handleLogOut} variant="dark">Logout</Button> :
                    <Link to='/login'><Button variant="dark">Login</Button></Link>
                }
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;