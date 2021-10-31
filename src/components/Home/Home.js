import React from 'react';
import Awareness from '../Awareness/Awareness';
import Banner from '../Banner/Banner';
import Event from '../Event/Event'
import Footer from '../Footer/Footer';
import StoryBlog from '../StoryBlog/StoryBlog';

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