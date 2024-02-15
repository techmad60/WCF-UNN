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
            <p className='text-center stroke-white text-[24px] text-white w-[262px] font-semibold pb-6'>"
            God is spirit, and those who worship him must worship in spirit and truth."
            </p>
            <p className="font-zhi-mang-xing text-center text-white text-[32px] ">John 4:24</p>
          </div>
        </section>

        <section className='text-center p-12 flex flex-col justify-center items-center'>
          <h2 className='text-[32px] text-primary-blue'>Vision</h2>
          <p className='text-xs'>Raising a great army of Christians from the various denominations for an imminent great harvest of souls into the kingdom of God; 
          </p>
          <p className='py-12 text-xs'>Bring about a great harvest of souls proper, and a great revival in the entire church;
          </p>
          <p className='text-xs'>Fulfilling the pre-rapture necessity (Eph. 4:11-15;5:27)
          </p>
        </section>
        <section className='text-center p-12 flex flex-col justify-center items-center'>
          <h2 className='text-[32px] text-primary-blue'>Mission</h2>
          <p className='py-4 text-xs '>To bring Jacob (the Church) back again to God;
          </p>
          <p className='py-4 text-xs'>To restore the preserved of Israel;
          </p>
          <p className='py-4 text-xs'>To be a light to the gentiles (the unsaved); and
          </p>
          <p className='py-4 text-xs'>To raise-up the tribes of Israel (denominations of the Church);
          </p>
          <p className='py-4 text-xs'>To be a light to the gentiles (the unsaved); and
          </p>
        </section>
        <section className='bg-primary-blue flex flex-col justify-center items-center text-white text-center pt-8'>
          <h2 className='text-white text-[32px]'>About Us</h2>

          <p className='py-8 text-xs  leading-8 w-[274px]'>Founded in 2004, we’re the campus arm of the Watchman Catholic Chaismatic Renewal Movement located at the Univerity of Nigeria Nsukka.</p>
        </section>

        <div className='flex flex-col justify-center items-center relative my-5'>
        <h2 className="text-[32px] text-primary-blue flex flex-col justify-center items-center pt-6">Days of Activities</h2>
          <section className='relative bg-bg-mobile bg-cover bg-center  w-[148px] h-[134px] rounded-[20px] my-8'>
            
            <div className='absolute overlay bg-transparent-blue flex flex-col items-center justify-center  top-0 left-0 w-[148px] h-[134px] rounded-[20px]'>
              <p className='text-center stroke-white text-[16px] text-white w-[262px] font-semibold pb-2 px-12'>
              Sunday Light Fellowship
              </p>
              <p className="font-semibold text-white text-xs">@Carva Auitorium</p>
              <p className="text-center text-white text-xs pt-3">8:00am - 11:30pm </p>
            </div>
          </section>

          <section className='relative bg-bg-mobile bg-cover bg-center  w-[148px] h-[134px] rounded-[20px] my-8'>
            <div className='absolute overlay bg-transparent-blue flex flex-col items-center justify-center  top-0 left-0 w-[148px] h-[134px] rounded-[20px]'>
              <p className='text-center stroke-white text-[16px] text-white w-[262px] font-semibold pb-1 px-16'>
              Tuesday Charismatic Hour
              </p>
              <p className="font-semibold text-white text-[12px]">@Carva Auitorium</p>
              <p className="text-center text-white text-[12px] font-extrabold pt-3">6:00pm - 8:30pm </p>
            </div>
          </section>

          <section className='relative bg-bg-mobile bg-cover bg-center  w-[148px] h-[134px] rounded-[20px] my-8'>
            <div className='absolute overlay bg-transparent-blue flex flex-col items-center justify-center  top-0 left-0 w-[148px] h-[134px] rounded-[20px]'>
              <p className='text-center stroke-white text-[16px] text-white w-[262px] font-semibold pb-2 px-12'>
              Thursday Bible Study
              </p>
              <p className="font-semibold text-white text-[12px]">@Carva Auitorium</p>
              <p className="text-center text-white text-[12px] font-extrabold pt-3">6:00pm - 8:30pm</p>
            </div>
          </section>
        </div>
        <section className='bg-event-blue flex flex-col justify-center items-center text-white text-center py-5'>
          <h2 className='text-[32px]'>Upcoming events</h2>
          <img src="./images/img-event.png" alt="" className='w-[272px] rounded-[20px] mt-6'/>
          <p className='font-semibold text-[20px] py-2'>Sister's Week</p>
          <p className='px-12 pb-3 text-xs'>Topic: <span className='font-medium'>"The lord shall fight for you, and you shall hold your peace."</span></p>
          <p className='px-12 pb-3 text-xs'>Text: <span className='font-medium'> Exodus 14:14</span></p>
          <p className='pt-6 text-xs'>( Feb: 18th-25th )</p>
        </section>

        <section>
          <h2 className="text-[32px] text-primary-blue flex flex-col justify-center items-center pt-6">Testimonials</h2>

          <div>
            <article className='flex flex-col justify-center items-center text-center'>
              <img src="/images/img-1-mobile.png" alt="" className='rounded-[20px] mt-6'/>
              <p className='text-xs px-16 pt-4 leading-[20px]'><span className='font-pontano text-[40px]'>“</span>This fellowship transformed my life, providing support and guidance that led me to a deeper connection with God.</p>
              <div className='pt-3'>
                <p className='text-primary-blue text-[15px] font-semibold'>Favour Nnabuife</p>
                <p className='text-xs leading-5'>Graduate (First Class) <br/>
                <span className='text-xs'>B.SC Pharmacy.</span>
                </p>
                
              </div>
            </article>
            <article className='flex flex-col justify-center items-center text-center'>
              <img src="/images/img-1-mobile.png" alt="" className='rounded-[20px] mt-6'/>
              <p className='text-xs px-16 pt-4 leading-[20px]'><span className='font-pontano text-[40px]'>“</span>This fellowship transformed my life, providing support and guidance that led me to a deeper connection with God.</p>
              <div className='pt-3'>
                <p className='text-primary-blue text-[15px] font-semibold'>Favour Nnabuife</p>
                <p className='text-xs leading-5'>Graduate (First Class) <br/>
                <span className='text-xs'>B.SC Pharmacy.</span>
                </p>
                
              </div>
            </article>
            <article className='flex flex-col justify-center items-center text-center'>
              <img src="/images/img-1-mobile.png" alt="" className='rounded-[20px] mt-6'/>
              <p className='text-xs px-16 pt-4 leading-[20px]'><span className='font-pontano text-[40px]'>“</span>This fellowship transformed my life, providing support and guidance that led me to a deeper connection with God.</p>
              <div className='pt-3'>
                <p className='text-primary-blue text-[15px] font-semibold'>Favour Nnabuife</p>
                <p className='text-xs leading-5'>Graduate (First Class) <br/>
                <span className='text-xs'>B.SC Pharmacy.</span>
                </p>
                
              </div>
            </article>
            
           
           
          </div>
        
        </section>
      </main>
    </div>

  )
}

export default App;
