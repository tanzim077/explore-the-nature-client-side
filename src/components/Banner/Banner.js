import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner_main col-lg-12  ">
            <div className="d-lg-flex banner py-5 container col-lg-12">
                <div className="col-lg-5 py-4 banner-left p-4 my-auto">
                    <h1>Explore The Nature</h1>
                    <h2>A Tour Management service</h2>
                    <h3>“The world is a book and those who do not travel read only one page.” ~ Saint Augustine</h3>
                </div>

                <div className="my-auto banner-right col-lg-6">
                </div>


            </div>
        </div>
    );
};

export default Banner;