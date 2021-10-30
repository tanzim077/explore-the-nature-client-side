import axios from 'axios';
import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useScheduleData from '../../hooks/useScheduleData';

const ScheduleList = () => {
    const [data, setData] = useScheduleData([]);
   
    var i = 0;

    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure to delete?")
        if (proceed) {
            axios.delete(`http://localhost:9999/schedules/${id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        const remainingSchedule = data.filter(d => d._id !== id)
                        setData(remainingSchedule);
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
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Event Name</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Cost</th>
                        <th>Starting Date</th>
                        <th>Status</th>
                        <th>Delete</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(d =>
                            <tr>
                                <td>{++i}</td>
                                <td>{d.userName}</td>
                                <td>{d.userEmail}</td>
                                <td>{d.userPhone}</td>
                                <td>{d.userAddress}</td>
                                <td>{d.eventName}</td>
                                <td>{d.from}</td>
                                <td>{d.destination}</td>
                                <td>{d.cost}</td>
                                <td>{d.start_date}</td>
                                <td>
                                    <Link to={`/scheduleStatus/${d._id}`}><Button variant="info">✅</Button></Link>
                                </td>
                                <td><Button onClick={() => handleDelete(d._id)} variant="danger">Delete</Button></td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ScheduleList;