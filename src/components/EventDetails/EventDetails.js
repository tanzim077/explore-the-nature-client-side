import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useEventData from '../../hooks/useEventData';

const EventDetails = () => {
    const { eventid } = useParams();

    const [eventInfo] = useEventData();
    const [item, setItem] = useState({});

    // useEffect(() => {
    //     fetch('/dummydata.json')
    //         .then(res => res.json())
    //         .then(data => setEventInfo(data))
    // }, [])

    // useEffect(() => {
    //     const matchedItem = eventInfo.find(doctordata => doctordata.id == eventid);
    //     setItem(matchedItem);
    // }, [eventInfo])

    console.log("object");
    console.log(eventInfo);

    return (
        <div className="container d-lg-flex">
            <div className="container">
                <img className="single-image" src={item?.imageURL} alt="" />
            </div>
            <div className="container d-flex align-items-center  single-item">
                <div className="">
                    <h1>{item?.name}</h1>
                    <p> {item?.designation} at {item?.hospital}</p>
                    <p>Specialist : {item?.category}</p>
                    <p>Chamber : {item?.chamber}</p>
                    <p>Time : {item?.time}</p>
                    <p>Visiting Days : {item?.day}</p>
                    <p>Service Charge : {item?.cost} TK.</p>
                    <a className="link-success" target="blank" href={`https://www.google.com/search?q=${item?.name}`}>Know more.. </a>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;