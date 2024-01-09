import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegBookmark, FaShareAlt, FaEye, FaRegStar, FaStar } from "react-icons/fa";
import Rating from 'react-rating';


const NewsCart = ({news}) => {
    const {_id, title, details, image_url, author, total_view, rating} = news;
    return (
        <div>
             <Card className="mb-4">
                <Card.Header className='d-flex gap-3 align-items-center'>
                <Image style={{height: '40px'}} src={author.img} roundedCircle/>
                <div className='flex-grow-1'>
                    <h3>{author.name}</h3>
                    <p>{moment (author.published_date).format('DD-MM-YYYY')}</p>
                </div>
                <div>
                <FaRegBookmark />
                <FaShareAlt />
                </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                    {details.length <250 ? <>{details}</> : <>{details.slice(0, 250)}...<Link to={`/news/${_id}`}>Read More</Link></>}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted d-flex">
                    <div className='flex-grow-1'>
                        <Rating  placeholderRating={rating?.number}
                        readonly
                            emptySymbol={<FaRegStar />}
                            placeholderSymbol={<FaStar className='text-warning' />}
                            fullSymbol={<FaStar />
                        }>
                            
                        </Rating>

                        <span>{rating?.number}</span>
                    </div>
                   <div>
                   <FaEye /> {total_view}
                   </div>
                    </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCart;