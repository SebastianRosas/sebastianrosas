import React, { useState } from 'react';
import "./hoverDate.css"

const HoverDate = () => {
  const [showDate, setShowDate] = useState(false);

  const handleHover = () => {
    setShowDate(true);
  };

  const handleLeave = () => {
    setShowDate(false);
  };

  const currentDate = new Date().toLocaleDateString();

  return (
    <div className='currentDate Container' onMouseEnter={handleHover} onMouseLeave={handleLeave}>
      {!showDate && <p className='currentDate'>CURRENT DATE</p>}
      {showDate && <p className='currentDate'>{currentDate}</p>}
    </div>
  );
};

export default HoverDate;