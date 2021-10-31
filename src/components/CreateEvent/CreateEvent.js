import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router';

const CreateEvent = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

    const history = useHistory();


    useEffect(() => {
        axios.get('https://evil-spirit-24673.herokuapp.com/events')
    }, [])

    const onSubmit = data => {
        axios.post('https://evil-spirit-24673.herokuapp.com/events/create', data)
            .then(alert("Inserted successfully"))
            .then(() => {
                reset();
                history.push('/events')
            })

    }

    return (
        <div className="container p-4 ">
            <form className="col-lg-6 d-flex mx-auto flex-column gap-2" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group row">
                    <label className="col-sm-4 col-form-label"> Tour Event Name </label>
                    <div className="col-sm-8">
                        <input className="form-control" placeholder="Tour Event Name" {...register("eventName", { required: true })} />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 col-form-label"> ImageURL </label>
                    <div className="col-sm-8">
                        <input className="form-control" placeholder="ImageURL" {...register("image", { required: true })} />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 col-form-label"> Starting Place </label>
                    <div className="col-sm-8">
                        <input className="form-control" placeholder="Starting Place" {...register("from", { required: true })} />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 col-form-label"> Ending Place </label>
                    <div className="col-sm-8">
                        <input className="form-control" placeholder="Ending Place " {...register("destination", { required: true })} />
                    </div>
                </div>


                <div className="form-group row">
                    <label className="col-sm-4 col-form-label"> Approximate Cost </label>
                    <div className="col-sm-8">
                        <input className="form-control" placeholder="Approximate Cost" {...register("cost", { required: true })} />
                    </div>
                </div>


                <div className="form-group row">
                    <label className="col-sm-4 col-form-label">Starting Date </label>
                    <div className="col-sm-8">
                        <input type="date" className="form-control" placeholder="Starting Date" {...register("start_date", { required: true })} />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 col-form-label">Start Time </label>
                    <div className="col-sm-8">
                        <input type="time" className="form-control" placeholder="Start Time" {...register("start_time", { required: true })} />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 col-form-label">Returning Date </label>
                    <div className="col-sm-8">
                        <input type="date" className="form-control" placeholder="Return Date" {...register("end_date", { required: true })} />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 col-form-label"> Description </label>
                    <div className="col-sm-8">
                        <input className="form-control" placeholder="description" {...register("description", { required: false })} />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 col-form-label"> Genre </label>
                    <div className="col-sm-8">
                        <input className="form-control" placeholder="Notes / Tags" {...register("extra", { required: false })} />
                    </div>
                </div>

                {errors.exampleRequired && <span className="text-danger">This field is required</span>}
                <Button className="" variant="primary" type="submit">Add</Button>

            </form>
        </div>
    );
};

export default CreateEvent