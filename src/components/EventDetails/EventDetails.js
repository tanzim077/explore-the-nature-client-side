import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useEventData from '../../hooks/useEventData';
import useAuth from '../../hooks/useAuth';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useParams } from 'react-router-dom';

const EventDetails = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const { id } = useParams();
    const { user } = useAuth();
    const history = useHistory();



    const [event, setEvent] = useState({});

    const { cost, description, destination, end_date, eventName, extra, from, image, start_date, start_time } = event
    const onSubmit = (data) => {
        const bookingData = { ...data, cost, description, destination, end_date, eventName, extra, from, image, start_date, start_time }
        axios.post('http://localhost:9999/schedules/create', bookingData)
            .then(alert("Inserted successfully"))
            .then(history.push('/myschedule'))

    }

    useEffect(() => {
        axios.get(`http://localhost:9999/events/${id}`)
            .then(function (response) {
                setEvent(response.data);
            })
    }, [])

    return (
        <div className="container d-lg-flex">
            <div className="container">
                <img className="img-fluid" src={event.image} alt="" />
                <div>
                    <h1>Event Name :{event.eventName}</h1>
                    <h3>Starting Point: {event.from}</h3>
                    <h3>Ending Point: {event.destination}</h3>
                    <h3>Tour Date: {event.start_date}</h3>
                    <h3>Return Date: {event.end_date}</h3>
                    <h3>Starting Time: {event.start_time}</h3>
                    <h3>Cost: {event.cost}</h3>
                </div>
                <div className="d-lg-flex">
                    <p>{event.description}</p>

                </div>


            </div>
            <div className="container">
                <form className="col-lg-10 d-flex mx-auto flex-column gap-2" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label"> Name </label>
                        <div className="col-sm-8">
                            <input className="form-control" placeholder="User Name" defaultValue={user.displayName} {...register("userName", { required: false })} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label"> Email </label>
                        <div className="col-sm-8">
                            <input className="form-control" placeholder="User Email" defaultValue={user.email} {...register("userEmail", { required: false })} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label"> Phone no</label>
                        <div className="col-sm-8">
                            <input className="form-control" placeholder="User Phone" {...register("userPhone", { required: false })} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label"> Address</label>
                        <div className="col-sm-8">
                            <input className="form-control" placeholder="Address"  {...register("userAddress", { required: false })} />
                        </div>
                    </div>

                    {errors.exampleRequired && <span className="text-danger">This field is required</span>}
                    <Button className="" variant="primary" type="submit">Confirm your booking</Button>

                </form>
            </div>
        </div>
    );
};

export default EventDetails;