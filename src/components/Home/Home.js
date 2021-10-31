import React from 'react';
import Awareness from '../Awareness/Awareness';
import Banner from '../Banner/Banner';
import Event from '../Event/Event'
import Footer from '../Footer/Footer';
import StoryBlog from '../StoryBlog/StoryBlog';
import food from "../../images/food.jpg";

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Event></Event>
            <Awareness></Awareness>
            <StoryBlog></StoryBlog>
            <Footer></Footer>
        </div>
    );
};

export default Home;