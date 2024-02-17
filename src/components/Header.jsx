import React from 'react'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { FaBars } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = ({handleToggleNav, isNavOpen}) => {
  return (
    <header className='relative p-4 md:p-8 lg:flex lg:justify-between lg:items-center lg:pt-8 lg:px-16 lg:mx-auto lg:max-w-5xl header'>
    <div className='flex justify-between items-center lg:items-start'>
        <img src="/images/logo.png" alt=""  className='w-8'/>
        <button onClick={handleToggleNav} className='cursor-pointer lg:hidden outline-0 border-[0px]'> 
          <FaBars className='text-xl' />
        </button>
    </div>
    {isNavOpen && (
        <div
          className="fixed top-0 left-0 w-[25vw] md:w-1/2 min-h-screen bg-black opacity-50 z-50"
          onClick={handleToggleNav} 
        />
      )}
    <nav
      aria-label='nav-mobile-header'
      className={`absolute top-0 right-0 bg-white flex flex-col min-h-screen w-3/4 items-center  pt-4 transition-all duration-300 ease-in-out ${isNavOpen ? 'fixed' : 'hidden transform translate-x-full '} z-50`}
    >
      <button onClick={handleToggleNav} className=' lg:hidden pt-4'>
        <FontAwesomeIcon icon = 'x' className='text-xl' />
      </button>
      <ul className='leading-[4rem] gap-[33px] mt-16 text-center text-xl'>
        <li className='hover:text-primary-blue transition-all duration-300 ease-in-out cursor-pointer '>
          <ScrollLink
            onClick={() => isNavOpen && handleToggleNav()}
            to='#'
            smooth={true} 
            duration={300}>
            Home
          </ScrollLink>
        </li>
        <li className='hover:text-primary-blue transition-all duration-300 ease-in-out cursor-pointer '>
          <ScrollLink
            onClick={() => isNavOpen && handleToggleNav()}
            to='about-us'
            smooth={true} 
            duration={300}>
            About Us
          </ScrollLink>
        </li>
        <li className='hover:text-primary-blue transition-all duration-300 ease-in-out cursor-pointer '>
        <ScrollLink
            onClick={() => isNavOpen && handleToggleNav()}
            to='events'
            smooth={true} 
            duration={400}>
            Events
          </ScrollLink>
        </li>
      </ul>

      <div className='flex flex-col mt-16 w-full items-center text-center lg:hidden'>
      <ScrollLink
            onClick={() => isNavOpen && handleToggleNav()}
            to='contact-us'
            smooth={true} 
            duration={400}
            className='text-white bg-primary-blue p-2 rounded-md w-32 mb-4 lg:mb-0 hover:bg-active-blue'>
            Contact Us
        </ScrollLink>
      </div>
    </nav>

    <nav aria-label='nav-header'>
        <ul className='leading-[4rem] lg:flex gap-[33px] text-center hidden'>
            <li className='nav-desktop lg:hover:text-primary-blue transition-all duration-300 ease-in-out  cursor-pointer'>
            <ScrollLink
                to='#'
                smooth={true} 
                duration={300}>
                Home
            </ScrollLink>
            </li>
            <li className='nav-desktop lg:hover:text-primary-blue transition-all duration-300 ease-in-out  cursor-pointer'>
            <ScrollLink
                to='about-us'
                smooth={true} 
                duration={300}>
                About Us
            </ScrollLink>
            </li>
            <li className='nav-desktop lg:hover:text-primary-blue transition-all duration-300 ease-in-out  cursor-pointer'>
            <ScrollLink
                to='events'
                smooth={true} 
                duration={400}>
                Events
            </ScrollLink>
            </li>
        </ul> 
    </nav>

    <div className='lg:flex flex-row mt-10 w-full  lg:mt-0 lg:w-fit  hover:bg-active-blue active:translate-y-4 transition-all duration-300 ease-in-out bg-primary-blue text-white justify-center rounded-md items-center py-2 px-8  hidden'>
        <ScrollLink
            to='contact-us'
            smooth={true} 
            duration={400}>
            Contact Us
        </ScrollLink>
    </div>
  </header>
  );
};

export default Header;