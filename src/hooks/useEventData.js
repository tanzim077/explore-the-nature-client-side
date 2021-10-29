import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useEventData = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:9999/events')
            .then(result => {
                setData(result.data.events);
            })
    }, [])

    return [data, setData];
};

export default useEventData;