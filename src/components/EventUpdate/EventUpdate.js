import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useParams } from 'react-router-dom';

const EventUpdate = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const [event, setEvent] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:9999/events/${id}`)
            .then(function (response) {
                setEvent(response.data);
            })
    }, [])
    console.log(event);

    const onSubmit = (data) => {
        console.log(data)
        axios.put(`http://localhost:9999/events/${id}`, data)
            .then(res => console.log("success"))
    }
    
    
    
    // history.push('/completeshopping');
    return (
        <div className="container p-4 ">
            <form className="col-lg-6 d-flex mx-auto flex-column gap-2" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group row">
                    <label className="col-sm-4 col-form-label"> Tour Event Name </label>
                    <div className="col-sm-8">
                        <input className="form-control" placeholder="Tour Event Name" defaultValue={event.eventName} {...register("eventName", { required: true })} />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 col-form-label"> ImageURL </label>
                    <div className="col-sm-8">
                        <input className="form-control" placeholder="ImageURL" defaultValue={event.image} {...register("image", { required: true })} />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 col-form-label"> Starting Place </label>
                    <div className="col-sm-8">
                        <input className="form-control" placeholder="Starting Place" defaultValue={event.from} {...register("from", { required: true })} />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 col-form-label"> Ending Place </label>
                    <div className="col-sm-8">
                        <input className="form-control" placeholder="Ending Place" defaultValue={event.destination} {...register("destination", { required: true })} />
                    </div>
                </div>


                <div className="form-group row">
                    <label className="col-sm-4 col-form-label"> Approximate Cost </label>
                    <div className="col-sm-8">
                        <input className="form-control" placeholder="Approximate Cost" defaultValue={event.cost} {...register("cost", { required: true })} />
                    </div>
                </div>


                <div className="form-group row">
                    <label className="col-sm-4 col-form-label">Starting Date </label>
                    <div className="col-sm-8">
                        <input type="date" className="form-control" placeholder="Starting Date" defaultValue={event.start_time} {...register("start_date", { required: true })} />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 col-form-label">Start Time </label>
                    <div className="col-sm-8">
                        <input type="time" className="form-control" placeholder="Start Time" defaultValue={event.start_time} {...register("start_time", { required: true })} />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 col-form-label">Returning Date </label>
                    <div className="col-sm-8">
                        <input type="date" className="form-control" placeholder="Return Date" defaultValue={event.end_date} {...register("end_date", { required: true })} />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 col-form-label"> Description </label>
                    <div className="col-sm-8">
                        <input className="form-control" placeholder="description" defaultValue={event.description} {...register("description", { required: false })} />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 col-form-label"> Genre </label>
                    <div className="col-sm-8">
                        <input className="form-control" placeholder="Notes / Tags" defaultValue={event.extra} {...register("extra", { required: false })} />
                    </div>
                </div>

                {errors.exampleRequired && <span className="text-danger">This field is required</span>}
                <Button className="" variant="primary" type="submit">Update</Button>

            </form>
        </div>
    );
};

export default EventUpdate;