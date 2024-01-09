import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInside from '../EditorsInsides/EditorsInside';

const News = () => {
   const news = useLoaderData();
   const {title, details, _id, image_url, author, rating, total_view, category_id} = news;
    return (
        <div>
           <Card className='mb-3'>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}><Button variant="primary">All news ibn this category</Button></Link>
                </Card.Body>
            </Card>
            <EditorsInside/>
        </div>
    );
};

export default News;