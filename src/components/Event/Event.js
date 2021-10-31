import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useEventData from '../../hooks/useEventData';
import SingleEvent from '../SingleEvent/SingleEvent';

const Event = () => {
    const [data] = useEventData();
    const displaydata = data.slice(0, 6);

    return (
        <div className="container mx-auto row py-5 text-center" >
            <h1>All Upcoming Events </h1>
            {
                displaydata.map(singledata => <SingleEvent key={singledata.id} singledata={singledata}></SingleEvent>)
            }
            <Link to='/events'><Button variant="warning">See All</Button></Link>
        </div>
    );
};

export default Event;