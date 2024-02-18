import React, {useState, useEffect} from 'react';
import './App.css';
import quotes from '../quotes.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faX, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import twitterIcon from './assets/icons/phone.svg';
import Header from './components/Header';
import Content from './components/Content';


library.add(fab, faX, faChevronLeft, faChevronRight);





function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [quoteData, setQuoteData] = useState([]);

  useEffect(() => {
    // Add or remove a class to the body and html to disable/enable scrolling
    const body = document.body;
    const html = document.documentElement;

    if (isNavOpen) {
      body.style.overflow = 'hidden';
      html.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'visible';
      html.style.overflow = 'visible';
    }
    // Clean up the effect on component unmount
    return () => {
      body.style.overflow = 'visible';
      html.style.overflow = 'visible';
    };
  }, [isNavOpen]);

  useEffect(() => {
    // Set quote data on component mount
    setQuoteData(quotes);
  }, []);

  useEffect(() => {
    // Set interval to change the quote every 5 seconds
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % quoteData.length);
    }, 3000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, [quoteData]);

  return (
    <div className='flex flex-col font-poppins'>
      <Header handleToggleNav={handleToggleNav} isNavOpen={isNavOpen}/>

      <Content quoteData={quoteData} currentIndex={currentIndex}/>

      <footer className='bg-primary-blue text-white pt-12 pb-8' id='contact-us'>
      <section className=' flex flex-col justify-center items-center text-xs '>
          <h2 className='text-[32px] py-4'>Contact Us</h2>
          <div className='py-6 leading-9'>
            <div className='flex justify-centeritems-xenter gap-2'>
              <img src={twitterIcon} className='w-4' alt="Twitter Icon" />
              <p>
                +2348103763064</p>
            </div>

            <div className='flex justify-centeritems-xenter gap-2'>
              <img src={twitterIcon} className='w-4' alt="Twitter Icon" />
              <p>
                +2348103763064</p>
            </div>

            <div className='flex justify-centeritems-xenter gap-2'>
              <img src={twitterIcon} className='w-4' alt="Twitter Icon" />
              <p>
                +2348103763064</p>
            </div>
          </div>
        </section>

        <section className='flex flex-col justify-center items-center text-white'>
          <p className='text-xs font-semibold'>Follow us on social media</p>
          <div className='flex justify-center items-center gap-4 py-4'>
            <FontAwesomeIcon className='text-xl' icon={['fab', 'square-facebook'] } />
            <FontAwesomeIcon className='text-xl' icon={['fab', 'x-twitter']} />
            <FontAwesomeIcon className='text-xl' icon={['fab', 'instagram']} />
            <FontAwesomeIcon className='text-xl' icon={['fab', 'telegram']} />
            <FontAwesomeIcon className='text-xl' icon={['fab', 'tiktok']} />
          </div>
        </section>
        <p className='text-xs text-center mt-8'>Designed and built with love by <a href=''  className='text-active-blue'>Techmad</a>.</p>
      </footer>
    </div>

  )
}

export default App;
