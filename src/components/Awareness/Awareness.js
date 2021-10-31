import React from 'react';
import ReactPlayer from 'react-player';

const Awareness = () => {
    return (
        <div className="d-flex">
            <div className="container">
                <ReactPlayer controls="true"
                    url="https://www.youtube.com/watch?v=1acjqraXMhs"
                />
            </div>
            <div className="container">
                <h1 className="text-center"> Protect the Environment</h1>
            </div>

        </div>
    );
};

export default Awareness;