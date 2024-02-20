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
    <section className='flex flex-col justify-center items-center text-center bg-gallery-blue mt-12 py-6 h-[400px] lg:h-[600px]'>
      <h2 className='text-[32px] text-white'>Gallery</h2>
      <div className="gallery-container w-[305px] relative flex justify-center items-center lg:w-[500px]">
        {/* Show only the current image */}
        <img src={pictures[currentIndex]} alt="" className='m-12 rounded-[20px] w-[305px] lg:w-[500px]'  loading='lazy'/>
        {/* Navigation buttons */}
        <div className='flex absolute justify-between w-[320px] z-20 lg:w-[605px]'>
        <FontAwesomeIcon
            icon='chevron-left'
            className={`bg-white rounded-full h-[20px] w-[20px] lg:h-[40px] lg:w-[40px] p-2 text-xl lg:p-4 text-primary-blue active:text-active-blue ${
              currentIndex === 0 ? 'pointer-events-none' : '' 
            }`}
            onClick={handlePrevClick}
          />
         <FontAwesomeIcon
            icon='chevron-right'
            className={`bg-white rounded-full h-[20px] w-[20px] lg:h-[40px] lg:w-[40px] p-2 text-xl lg:p-4 text-primary-blue active:text-active-blue ${
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
