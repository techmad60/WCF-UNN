import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import pictures from '../../pictures.json';
import '../App.css'; // Import CSS file for styles

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrevClick = () => {
    if (currentIndex !== 0) {
      setCurrentIndex(prevIndex => prevIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex !== pictures.length - 1) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <section className='flex flex-col justify-center items-center text-center bg-gallery-blue mt-12 py-6'>
      <h2 className='text-[32px] text-white'>Gallery</h2>
      <div className="gallery-container  w-[272px] relative flex justify-center items-center">
        {/* Show only the current image */}
        <img src={pictures[currentIndex]} alt="" className='my-6 rounded-[20px] w-full ' />
        {/* Navigation buttons */}
        <div className='flex absolute justify-between w-[320px] z-20'>
        <FontAwesomeIcon
            icon='chevron-left'
            className={`bg-white rounded-full h-[20px] w-[20px] p-2 text-xl text-primary-blue active:text-active-blue ${
              currentIndex === 0 ? 'pointer-events-none' : '' 
            }`}
            onClick={handlePrevClick}
          />
         <FontAwesomeIcon
            icon='chevron-right'
            className={`bg-white rounded-full h-[20px] w-[20px] p-2 text-xl text-primary-blue active:text-active-blue ${
              currentIndex === pictures.length - 1 ? 'pointer-events-none' : '' 
            }`}
            onClick={handleNextClick}
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
