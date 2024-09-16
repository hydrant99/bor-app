import React from 'react';
import '../App.css'; // Import CSS file
import useDeviceType from '../useDeviceType.js';


const FooterBar = () => {
    const deviceType = useDeviceType();  // Get device type ('Mobile' or 'Desktop')
    return (
            <div className='Footer'>
                <p>theboxofrocks.com 2024
                <br/>{deviceType} Version
                </p>
                
            
            </div>
    ); 
}; 


export default FooterBar;