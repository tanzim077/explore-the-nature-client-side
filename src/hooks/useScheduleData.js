import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useScheduleData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://evil-spirit-24673.herokuapp.com/schedules')
            .then(result => {
                setData(result.data.schedules);
            })
    }, [])

    return [data, setData];
};

export default useScheduleData;