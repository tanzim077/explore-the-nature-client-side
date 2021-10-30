import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Button } from 'react-bootstrap';

const ScheduleUpdate = () => {
    const [schedule, setSchedule] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:9999/schedules/${id}`)
            .then(function (response) {
                setSchedule(response.data);
              
            })
    }, [])

    const history = useHistory();

    const nameChange = e => {
        const updateName = e.target.value;
        const updateSchedule = { ...schedule }
        updateSchedule.userName = updateName;
        setSchedule(updateSchedule);
    }

    const emailChange = e => {
        const updateEmail = e.target.value;
        const updateSchedule = { ...schedule }
        updateSchedule.userEmail = updateEmail;
        setSchedule(updateSchedule);
    }

    const phoneChange = e => {
        const updatePhone = e.target.value;
        const updateSchedule = { ...schedule }
        updateSchedule.userPhone = updatePhone;
        setSchedule(updateSchedule);
    }

    const addressChange = e => {
        const updateAddress = e.target.value;
        const updateSchedule = { ...schedule }
        updateSchedule.userAddress = updateAddress;
        setSchedule(updateSchedule);
    }


    const handleUpdate = (data) => {
        axios.put(`http://localhost:9999/schedules/${id}`, schedule)
            .then(res => alert("Update Successfully"))
            .then(setSchedule({}))
            .then(() => history.push('/myschedule'))
        data.preventDefault();
    }

    return (
        <div className="container p-4 ">
            <form className="col-lg-6 d-flex mx-auto flex-column gap-2" onSubmit={handleUpdate}>

                <div className="form-group row">
                    <label for="staticEmail" className="col-sm-4 col-form-label">Name</label>
                    <div className="col-sm-8">
                        <input className="form-control" onChange={nameChange} type="text" value={schedule.userName || ''} />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="staticEmail" className="col-sm-4 col-form-label">Email</label>
                    <div className="col-sm-8">
                        <input className="form-control" onChange={emailChange} type="text" value={schedule.userEmail || ''} />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="staticEmail" className="col-sm-4 col-form-label">Phone</label>
                    <div className="col-sm-8">
                        <input className="form-control" onChange={phoneChange} type="text" value={schedule.userPhone || ''} />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="staticEmail" className="col-sm-4 col-form-label">Address</label>
                    <div className="col-sm-8">
                        <input className="form-control" onChange={addressChange} type="text" value={schedule.userAddress || ''} />
                    </div>
                </div>
                <Button className="" variant="primary" type="submit">Update</Button>
            </form>

        </div>
    );
};

export default ScheduleUpdate;