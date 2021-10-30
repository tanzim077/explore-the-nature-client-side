import axios from 'axios';
import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useEventData from '../../hooks/useEventData';

const EventList = () => {
    const [data, setData] = useEventData([]);

    var i = 1;



    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure to delete?")
        if (proceed) {
            axios.delete(`http://localhost:9999/events/${id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        const remainingEvent = data.filter(m => m._id !== id)
                        setData(remainingEvent);
                    }
                })
        }
    }

    return (
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Event Name</th>
                        <th>Starting Place</th>
                        <th>Ending Place</th>
                        <th>Approximate Cost</th>
                        <th>Starting Date</th>
                        <th>Ending Date</th>
                        <th>Details</th>
                        <th>Update</th>
                        <th>Delete</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(e =>
                            <tr>
                                <td>{i++}</td>
                                <td>{e.eventName}</td>
                                <td>{e.from}</td>
                                <td>{e.destination}</td>
                                <td>{e.cost}</td>
                                <td>{e.start_date}</td>
                                <td>{e.end_date}</td>
                                <td>
                                    <Link to={`/eventupdate/${e._id}`}><Button variant="info">Details</Button></Link>
                                </td>
                                <td>
                                    <Link to={`/eventupdate/${e._id}`}><Button variant="warning">Update</Button></Link>
                                </td>
                                <td><Button onClick={() => handleDelete(e._id)} variant="danger">Delete</Button></td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default EventList;