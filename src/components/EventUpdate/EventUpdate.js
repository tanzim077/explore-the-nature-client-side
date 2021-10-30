import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useParams } from 'react-router-dom';

const EventUpdate = () => {
    const [event, setEvent] = useState([]);
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:9999/events/${id}`)
            .then(function (response) {
                setEvent(response.data);
            })
    }, [id])

    const nameChange = e => {
        const updateName = e.target.value;
        const updateEvent = { ...event }
        updateEvent.eventName = updateName;
        setEvent(updateEvent);
    }
    const startTimeChange = e => {
        const updateStartTime = e.target.value;
        const updateEvent = { ...event }
        updateEvent.start_time = updateStartTime;
        setEvent(updateEvent);
    }
    const destinationChange = e => {
        const updateDestination = e.target.value;
        const updateEvent = { ...event }
        updateEvent.destination = updateDestination;
        setEvent(updateEvent);
    }
    const imageChange = e => {
        const updateImage = e.target.value;
        const updateEvent = { ...event }
        updateEvent.image = updateImage;
        setEvent(updateEvent);
    }
    const startingPointChange = e => {
        const startingPoint = e.target.value;
        const updateEvent = { ...event }
        updateEvent.from = startingPoint;
        setEvent(updateEvent);
    }
    const costChange = e => {
        const updateCost = e.target.value;
        const updateEvent = { ...event }
        updateEvent.cost = updateCost;
        setEvent(updateEvent);
    }
    const startDateChange = e => {
        const updateStartDate = e.target.value;
        const updateEvent = { ...event }
        updateEvent.start_date = updateStartDate;
        setEvent(updateEvent);
    }
    const endDateChange = e => {
        const updateEndDate = e.target.value;
        const updateEvent = { ...event }
        updateEvent.end_date = updateEndDate;
        setEvent(updateEvent);
    }
    const descriptionChange = e => {
        const updateDescription = e.target.value;
        const updateEvent = { ...event }
        updateEvent.description = updateDescription;
        setEvent(updateEvent);
    }
    const extraChange = e => {
        const updateExtra = e.target.value;
        const updateEvent = { ...event }
        updateEvent.extra = updateExtra;
        setEvent(updateEvent);
    }


    const handleUpdate = (data) => {
        axios.put(`http://localhost:9999/events/${id}`, event)
            .then(res => alert("Update Successfully"))
            .then(setEvent({}))
            .then(() =>  history.push('/eventlist'))
        data.preventDefault();
    }

    return (
        <div className="container p-4 ">
            <form className="col-lg-6 d-flex mx-auto flex-column gap-2" onSubmit={handleUpdate}>
                <div className="form-group row">
                    <label for="staticEmail" className="col-sm-4 col-form-label">Event Name</label>
                    <div className="col-sm-8">
                        <input className="form-control" onChange={nameChange} type="text" value={event.eventName || ''} />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="staticEmail" className="col-sm-4 col-form-label">Image URL</label>
                    <div className="col-sm-8">
                        <input className="form-control" onChange={imageChange} type="text" value={event.image || ''} />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="staticEmail" className="col-sm-4 col-form-label">Starting Place</label>
                    <div className="col-sm-8">
                        <input className="form-control" onChange={startingPointChange} type="text" value={event.from || ''} />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="staticEmail" className="col-sm-4 col-form-label">Destination</label>
                    <div className="col-sm-8">
                        <input className="form-control" onChange={destinationChange} type="text" value={event.destination || ''} />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="staticEmail" className="col-sm-4 col-form-label">Cost</label>
                    <div className="col-sm-8">
                        <input className="form-control" onChange={costChange} type="number" value={event.cost || ''} />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="staticEmail" className="col-sm-4 col-form-label">Starting Date</label>
                    <div className="col-sm-8">
                        <input className="form-control" onChange={startDateChange} type="date" value={event.start_date || ''} />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="staticEmail" className="col-sm-4 col-form-label">Time</label>
                    <div className="col-sm-8">
                        <input className="form-control" onChange={startTimeChange} type="time" value={event.start_time || ''} />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="staticEmail" className="col-sm-4 col-form-label">Ending Date</label>
                    <div className="col-sm-8">
                        <input className="form-control" onChange={endDateChange} type="date" value={event.end_date || ''} />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="staticEmail" className="col-sm-4 col-form-label">Description</label>
                    <div className="col-sm-8">
                        <input className="form-control" onChange={descriptionChange} type="text" value={event.description || ''} />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="staticEmail" className="col-sm-4 col-form-label">Extra /Tag</label>
                    <div className="col-sm-8">
                        <input className="form-control" onChange={extraChange} type="text" value={event.extra || ''} />
                    </div>
                </div>

                <Button className="" variant="primary" type="submit">Update</Button>
            </form>

        </div>
    );
};

export default EventUpdate;