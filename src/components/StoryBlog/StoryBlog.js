import React from 'react';
import "./StoryBlog.css";
import useStoryBlog from '../../hooks/useStoryBlog';
import SingleStory from '../SingleStory/SingleStory';

const StoryBlog = () => {
    const [data] = useStoryBlog();

    return (
        <div>
            <h1 className="tile text-center pt-4" >Traveller's Story</h1>
            <div className="container p-5 d-lg-flex gap-3">
                {
                    data.map(singledata => <SingleStory key={singledata._id} singledata={singledata}></SingleStory>)
                }
            </div>
        </div>
    )

};

export default StoryBlog;