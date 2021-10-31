import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useParams } from 'react-router-dom';
import './EventDetails.css';

const EventDetails = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const { id } = useParams();
    const { user } = useAuth();
    const history = useHistory();
    const [event, setEvent] = useState({});

    const { cost, description, destination, end_date, eventName, extra, from, image, start_date, start_time } = event;
    const userStatus = "pending";
    const onSubmit = (data) => {
        const bookingData = { ...data, userStatus, cost, description, destination, end_date, eventName, extra, from, image, start_date, start_time }
        axios.post('https://evil-spirit-24673.herokuapp.com/schedules/create', bookingData)
            .then(alert("Inserted successfully"))
            .then(history.push('/myschedule'))
    }

    useEffect(() => {
        axios.get(`https://evil-spirit-24673.herokuapp.com/events/${id}`)
            .then(function (response) {
                setEvent(response.data);
            })
    }, [])

    return (
        <div className="container d-lg-flex">
            <div className="card col-lg-6 ">
                <h5 className="event-title">{eventName}</h5>

                <div className="card-header gap-3 justify-content-between">
                    <div className="card-title-group">
                        <h3 className="card-title">{from} to {destination}</h3>
                        <h5 className="card-subtitle pt-2">Date: <span className="custom-1">{start_date} to {end_date}</span></h5>
                        <h5 className="card-subtitle pt-1">Journey Start: <span className="custom-1">{start_time}</span></h5>
                    </div>
                    <div>
                        <p className="cost">{cost} ৳ </p>
                    </div>
                </div>

                <img className="event-image" src={image} alt="Logo" />
                <div className="card-text">{description}</div>
                <hr />
                <h5 className="card-text">Tags: {extra}</h5>

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
        </div >
    );
};

export default EventDetails;