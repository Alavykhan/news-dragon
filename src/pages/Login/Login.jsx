import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';


const Login = () => {
    const {signIn} = useContext(AuthContext);


    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location);

    const from = location.state?.from?.pathname || '/category/0';

    const handleLogin = event=>{
        event.preventDefault();
        event.preventDefault();
        const form = event.target;
        const password = form.password.value;
        const email = form.email.value;
        console.log(email, password);
        form.reset()

        signIn(email, password)
        .then(result=>{
            const loggedUser = result.user 
            console.log(loggedUser);
            navigate(from, {replace: true})
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <Container className='w-25 mx-auto mt-5'>
            <h3>Please Login</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="mt-4">
                    Don't have an account? <Link to='/register'>Register</Link>
                </Form.Text>
                <Form.Text className="text-success">
                    
                </Form.Text>
                <br />
                <Form.Text className="text-danger">
                    
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;