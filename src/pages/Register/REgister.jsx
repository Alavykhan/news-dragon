import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const REgister = () => {

    const {createUser} = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false)

    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const password = form.password.value;
        const email = form.email.value;
        console.log(name, email, password);
        form.reset();

        createUser(email, password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error=>{
            console.log(error);
        })
    }


    const handleRegistered = event =>{
        setAccepted(event.target.checked);
    }

    return (
        <div>
            <Container className='w-25 mx-auto mt-5'>
            <h3>Please Register</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Write your name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleRegistered} type="checkbox" label={<>Accept <Link to='/terms'>Terms & Conditions</Link></>} />
                </Form.Group>
                <Button variant="primary" disabled={!accepted} type="submit">
                    Submit
                </Button>
                <br />
                <Form.Text className="mt-4">
                    If you have an account, Please <Link to='/login'>Login</Link>
                </Form.Text>
                <Form.Text className="text-success">
                    
                </Form.Text>
                <br />
                <Form.Text className="text-danger">
                    
                </Form.Text>
            </Form>
        </Container>
        </div>
    );
};

export default REgister;