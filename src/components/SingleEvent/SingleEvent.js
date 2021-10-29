import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleEvent = (props) => {
    const { _id, eventName, image, from, destination, description, cost } = props.singledata;
    return (
        <div className=" col-lg-4 p-2">
            <Card className="p-2" style={{ width: '22rem', height: '27em' }}>
                <Card.Img style={{ width: '100%', height: '12rem' }} src={image} />
                <Card.Body>
                    <Card.Title>{eventName}</Card.Title>
                    <Card.Text>{cost}</Card.Text>
                    <Card.Text>{description}</Card.Text>
                    <Link to={`/eventdetails/${_id}`}><Button variant="primary">View Details</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleEvent;