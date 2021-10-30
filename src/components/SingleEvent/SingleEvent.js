import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleEvent = (props) => {
    const { _id, eventName, image, from, destination, description, cost, start_date } = props.singledata;
    return (
        <div className=" col-lg-4 p-2">
            <Card className="p-2" style={{ width: '22rem', height: '30em' }}>
                <Card.Img style={{ width: '100%', height: '12rem' }} src={image} />
                <Card.Body>
                    <Card.Title>Event Name : {eventName}</Card.Title>
                    <Card.Text><i class="fas fa-map-marker-alt"></i> &nbsp; {from} to {destination} &nbsp; <i class="fas fa-flag-checkered"></i></Card.Text>
                    <div className="d-flex justify-content-between">
                    <Card.Text>Cost : {cost} ৳ </Card.Text>
                        <Card.Text><i class="far fa-calendar-alt"></i>  &nbsp; Tour Date : {start_date}</Card.Text>
                    </div>
                    <Card.Text>{description.slice(0,100)}....</Card.Text>
                    <Link to={`/eventdetails/${_id}`}><Button variant="primary">Confirm Schedule</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleEvent;