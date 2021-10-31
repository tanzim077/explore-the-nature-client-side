import React, { useEffect, useState } from 'react';
import axios from 'axios';


const useStoryBlog = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://evil-spirit-24673.herokuapp.com/storyblogs')
            .then(result => {
                setData(result.data.storyBlog);
                // console.log(result);
            })
    }, [])

    return [data, setData];
};

export default useStoryBlog;