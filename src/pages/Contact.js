import React from 'react';
import '../App.css';
import useDeviceType from '../useDeviceType.js';

const Home = () => {
  const deviceType = useDeviceType();  // Get device type ('Mobile' or 'Desktop')
 
  return (
    <div> <h1>Welcome to the Contact Page! {deviceType} </h1></div>
    )
  };
  
  export default Home;
  