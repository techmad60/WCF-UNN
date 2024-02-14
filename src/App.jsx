import React from 'react';
import './App.css';
import { FaBars } from 'react-icons/fa';


function App() {
  

  return (
    <div className='flex flex-col font-poppins'>
      <header className='flex justify-between p-4 items-center'>
        <img src="/images/WCF-UNN-logo.png" alt="" className='w-8'/>
        <FaBars className='text-xl' /> 
      </header>
      <main>
        <section className='hero-img  bg-bg-mobile bg-no-repeat relative h-[297px] bg-cover bg-center'> 
          <div className='absolute overlay bg-transparent-blue w-full flex flex-col items-center justify-center  top-0 left-0 h-[297px]'>
            <p className='text-center stroke-white text-[24px] text-white w-[262px] font-semibold pb-6'>
            "God is spirit, and those who worship him must worship in spirit and truth."
            </p>
            <p className="font-zhi-mang-xing text-center text-white text-[32px] ">John 4:24</p>
          </div>
        </section>
      </main>
    </div>

  )
}

export default App;
