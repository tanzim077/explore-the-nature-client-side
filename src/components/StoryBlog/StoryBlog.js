import React from 'react';
import "./StoryBlog.css";
import useStoryBlog from '../../hooks/useStoryBlog';
import SingleStory from '../SingleStory/SingleStory';

const StoryBlog = () => {
    const [data] = useStoryBlog();
    console.log(data)
    data.map(data => {
        console.log(data.storyAuthor)

    })
    return (
        <div className="container p-5 d-flex gap-3">
            {
                data.map(singledata => <SingleStory key={singledata._id} singledata={singledata}></SingleStory>)
            }
        </div>)
};

export default StoryBlog;