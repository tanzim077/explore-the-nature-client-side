import React from 'react';
import ReactPlayer from 'react-player';
import './Awareness.css';

const Awareness = () => {
    return (
        <div className="d-lg-flex awareness">
            <div className="container">
                <ReactPlayer width = "100%" controls="true"
                    url="https://www.youtube.com/watch?v=1acjqraXMhs"
                />
            </div>
            <div className="container my-auto">
                <h1 className="text-center title"> Protect The Environment</h1>
                <div className="container pt-5 subtitle text-center">
                    <h4>We are against plastics material. We try to build a great world for every creatures. Try to avoid using plastics during your tour.</h4>
                </div>
                <div>
                    <h1 className="d-flex justify-content-center gap-4 pt-5"><i class="fas custom-warn fa-exclamation-triangle"></i> <i class="fas custom-warn fa-exclamation-circle"></i> <i class="fas custom-warn fa-smoking-ban"></i> </h1>
                </div>
            </div>

        </div>
    );
};

export default Awareness;