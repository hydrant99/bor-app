import { useState, useEffect } from 'react';

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState('');  // State to hold if it's mobile or desktop

  useEffect(() => {
    const updateDeviceType = () => {
      if (window.innerWidth < 768) {
        setDeviceType('Mobile');
      } else {
        setDeviceType('Desktop');
      }
    };

    // Initial check
    updateDeviceType();

    // Add a resize event listener
    window.addEventListener('resize', updateDeviceType);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', updateDeviceType);
  }, []);

  return deviceType;
};

export default useDeviceType;
