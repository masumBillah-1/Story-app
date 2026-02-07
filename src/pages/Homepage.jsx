import React from 'react';
import Header from '../components/Navbar/Header';

import Login from './Login/Login';

import Banner from '../components/Hero.jsx/Banner';
import PublicStoryTailwind from '../components/PublicStory';


const Homepage = () => {
    return (
        <div>
            <Banner/>
            <PublicStoryTailwind />
        </div>
    );
};

export default Homepage;