import React from "react";
import '../App.css';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className="homePage">
     <div className='getContainer'> <p className='get'>GET THE KNOWLEDGE YOU NEED</p></div>
      <div className='callAction'><Link to='/tutors'><button className="getHelp">Get Instant Home Work Help</button></Link></div>
      <img src="/images/picture.svg" alt=''/>
    </div>
  );
};

export default Home;
