import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import pictures from '../../pictures.json';
import '../App.css'; // Import CSS file for styles

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex(prevIndex => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className='flex flex-col justify-center items-center text-center bg-gallery-blue mt-12 py-6 relative'>
      <h2 className='text-[32px] text-white'>Gallery</h2>
      <div className="gallery-container">
        {/* Wrapper for sliding images */}
        <div className="gallery-wrapper flex justify-center items-center  w-[300px]" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {/* Iterate through images and display them */}
          {pictures.map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt="" className='my-6 rounded-[20px]' />
          ))}
        </div>
      </div>
      <div className='flex absolute justify-between w-[320px]'>
        <FontAwesomeIcon icon='chevron-left' className='bg-white rounded-full h-[20px] w-[20px] p-2 text-xl text-primary-blue' onClick={handlePrevClick} />
        <FontAwesomeIcon icon='chevron-right' className='bg-white rounded-full h-[20px] w-[20px] p-2 text-xl text-primary-blue' onClick={handleNextClick} />
      </div>
    </section>
  );
};

export default Gallery;
