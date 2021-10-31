import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useEventData from '../../hooks/useEventData';

const Events = () => {

    const [data] = useEventData([]);
  
    return (
        <div className="container d-flex flex-wrap">
            {
                data.map(data =>
                    <div className="col-lg-4 py-3">
                        <Card key={data.id} className="p-2" style={{ width: '22rem' }}>
                            <Card.Img style={{ width: '100%', height: '12rem' }} src={data.image} />
                            <Card.Body>
                                <Card.Title>{data.eventName}</Card.Title>
                                <Card.Subtitle >{data.from} to {data.destination}</Card.Subtitle>
                                <br />
                                <Card.Subtitle >{data.start_date} at {data.start_time} </Card.Subtitle>
                                <Card.Subtitle >Cost:  {data.cost} </Card.Subtitle>
                                <hr />
                                <Card.Text>
                                    {data.description}
                                </Card.Text>
                                <Link to={`/eventdetails/${data._id}`}><Button className="confirm"><i class="fas event-icon fa-calendar-plus">&nbsp;</i>Confirm Schedule</Button></Link>
                            </Card.Body>
                        </Card>
                    </div>
                )
            }

        </div>
    );
};

export default Events;