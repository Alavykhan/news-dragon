import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../pages/Shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';

const NewsLayout = () => {
    return (
        <div>
              <Header/>
            <Container>
                <Row className='mt-4'>
                    <Col lg={9}><Outlet/></Col>
                    <Col lg={3}><RightNav/></Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    );
};

export default NewsLayout;