import React from 'react';

import Gallery from './Gallery';

const Content = ({quoteData, currentIndex}) => {
  return (
    <main className=''>
        <section className='hero-img  bg-bg-mobile bg-no-repeat relative h-[297px] bg-cover bg-center lg:bg-desktop lg:h-[400px]'> 
            <div className='absolute overlay bg-transparent-blue w-full flex flex-col items-center justify-center  top-0 left-0 h-[297px] lg:h-[400px]'>
                <p id='quote' className='text-center stroke-white text-[24px]  text-white w-[262px] lg:w-[500px] font-semibold pb-6' >{quoteData[currentIndex]?.text}
                </p>
                <p id='verse' className="font-zhi-mang-xing text-center text-white text-[32px]">{quoteData[currentIndex]?.verse}</p>
            </div>
        </section>
        
        <div className='lg:grid grid-cols-2  lg:pt-4 lg:pb-16 place-content-center lg:max-w-4xl mx-auto gap-10'>
            <section className='text-center px-12 flex flex-col justify-center items-center py-4 mx-auto lg:px-0'>
                <h2 className='text-[32px] text-primary-blue'>Vision</h2>
                <p className='text-xs'>Raising a great army of Christians from the various denominations for an imminent great harvest of souls into the kingdom of God; 
                </p>
                <p className='py-12 text-xs lg:py-10'>Bring about a great harvest of souls proper, and a great revival in the entire church;
                </p>
                <p className='text-xs'>Fulfilling the pre-rapture necessity (Eph. 4:11-15;5:27)
                </p>
            </section>

            <section className='text-center py-4 px-12 flex flex-col justify-center items-center lg:p-0'>
                <h2 className='text-[32px] text-primary-blue'>Mission</h2>
                <p className='py-4 text-xs leading-6 lg:pt-0 lg:py-2'>
                "And now, saith the Lord that formed me from the womb to be his servant, to bring Jacob again to him, Though Israel be not gathered, yet shall I be glorious in the eyes of the Lord, and my God shall be my strength. And he said, It is a light thing that thou shouldest be my servant to raise up the tribes of Jacob, and to restore the preserved of Israel: I will also give thee for a light to the Gentiles, that thou mayest be my salvation unto the end of the earth."
                </p>
            </section>
        </div>
        
        <section className='bg-primary-blue flex flex-col justify-center items-center text-white text-center pt-8 lg:py-12' id='about-us'>
            <h2 className='text-white text-[32px]'>About Us</h2>

            <p className='py-4 text-xs  leading-8 w-[274px] lg:w-[350px] '>Founded in 2004, we’re the campus arm of the Watchman Catholic Chaismatic Renewal Movement located at the Univerity of Nigeria Nsukka.</p>
        </section>

        <div className='flex flex-col justify-center items-center relative my-5'>
            <h2 className="text-[32px] text-primary-blue flex flex-col justify-center items-center pt-6">Days of Activities</h2>
            <div className='lg:flex justify-between lg:w-full lg:max-w-4xl'>
                <section className='relative bg-sunday bg-cover bg-center  w-[148px] h-[134px] rounded-[20px] my-8 lg:w-[200px] lg:h-[148px]'>
                    
                    <div className='absolute overlay bg-transparent-blue flex flex-col items-center justify-center  top-0 left-0 w-[148px] h-[134px] rounded-[20px] lg:w-[200px] lg:h-[148px]'>
                    <p className='text-center stroke-white text-[16px] text-white w-[262px] font-semibold pb-2 px-12'>
                    Sunday Light Fellowship
                    </p>
                    <p className="font-semibold text-white text-[12px]">@Carva Auitorium</p>
                    <p className="text-center text-white text-[12px] pt-3">8:00am - 11:30pm </p>
                    </div>
                </section>

                <section className='relative bg-tuesday bg-cover bg-center  w-[148px] h-[134px] rounded-[20px] my-8 lg:w-[200px] lg:h-[148px]'>
                    <div className='absolute overlay bg-transparent-blue flex flex-col items-center justify-center  top-0 left-0 w-[148px] h-[134px] rounded-[20px] lg:w-[200px] lg:h-[148px]'>
                    <p className='text-center stroke-white text-[16px] text-white w-[262px] font-semibold pb-1 px-16'>
                    Tuesday Charismatic Hour
                    </p>
                    <p className="font-semibold text-white text-[12px]">@Carva Auitorium</p>
                    <p className="text-center text-white text-[12px]  pt-3">6:00pm - 8:30pm </p>
                    </div>
                </section>

                <section className='relative bg-thursday bg-cover bg-center  w-[148px] h-[134px] rounded-[20px] my-8 lg:w-[200px] lg:h-[148px]'>
                    <div className='absolute overlay bg-transparent-blue flex flex-col items-center justify-center  top-0 left-0 w-[148px] h-[134px] rounded-[20px] lg:w-[200px] lg:h-[148px]'>
                    <p className='text-center stroke-white text-[16px] text-white w-[262px] font-semibold pb-2 px-12'>
                    Thursday Bible Study
                    </p>
                    <p className="font-semibold text-white text-[12px]">@Carva Auitorium</p>
                    <p className="text-center text-white text-[12px]  pt-3">6:00pm - 8:30pm</p>
                    </div>
                </section>
            </div>
           
        </div>
        <section className='bg-event-blue flex flex-col justify-center items-center text-white text-center py-5' id='events'>
            <h2 className='text-[32px]'>Upcoming events</h2>
            <img src="./images/img3.png.jpg" alt="" className='w-[272px] rounded-[20px] mt-6 lg:w-[500px]' loading='lazy'/>
            <p className='font-medium text-[20px] py-2 font-zhi-mang-xing tracking-[0.2em]'>Sister's Week</p>
            <p className='px-12 pb-3 text-xs'>Topic: <span className='font-medium'>"THE EMERGENCE OF HOLY WOMEN OF INFLUENCE."</span></p>
            <p className='px-12 pb-3 text-xs'>Text: <span className='font-medium'> Exodus 14:14</span></p>
            <p className='pt-6 text-xs'>( Feb 26th - March 3rd )</p>
        </section>

        <section>
            <h2 className="text-[32px] text-primary-blue flex flex-col justify-center items-center pt-6">Our Testimonies</h2>

            <div className='lg:flex'>
                <article className='flex flex-col justify-center items-center text-center'>
                    <img src="/images/img-1-mobile.png" alt="" className='rounded-[20px] mt-6'/>
                    <p className='text-xs px-16 pt-4 leading-[20px]'><span className='font-pontano text-[40px]'>“</span>This fellowship transformed my life, providing support and guidance that led me to a deeper connection with God.</p>
                    <div className='pt-3 text-xs'>
                        <p className='text-primary-blue text-[12px] font-semibold'>Favour Nnabuife</p>
                        <p className='text-xs leading-5'> (First Class) <br/>
                        <span className='text-xs'>B.SC Pharmacy.</span>
                        </p>
                        
                    </div>
                </article>
                <article className='flex flex-col justify-center items-center text-center my-6'>
                <img src="/images/img-1-mobile.png" alt="" className='rounded-[20px] mt-6'/>
                <p className='text-xs px-16 pt-4 leading-[20px]'><span className='font-pontano text-[40px]'>“</span>Finding this fellowship felt like finding family. I've discovered love, acceptance, and a sense of belonging here.</p>
                <div className='pt-3 text-xs'>
                    <p className='text-primary-blue  font-semibold'>Favour Nnabuife</p>
                    <p className='text-xs leading-5'> (First Class) <br/>
                    <span className='text-xs'>B.SC Pharmacy.</span>
                    </p>
                    
                </div>
                </article>
                <article className='flex flex-col justify-center items-center text-center'>
                    <img src="/images/img-1-mobile.png" alt="" className='rounded-[20px] mt-6'/>
                    <p className='text-xs px-16 pt-4 leading-[20px]'><span className='font-pontano text-[40px]'>“</span>Through this fellowship, I've experienced the incredible power of prayer and unity, witnessing miracles and finding strength in community</p>
                    <div className='pt-3 text-xs'>
                        <p className='text-primary-blue font-semibold'>Favour Nnabuife</p>
                        <p className=' leading-5'> (First Class) <br/>
                        <span className=''>B.SC Pharmacy.</span>
                        </p>
                    </div>
                </article>
            </div>
        </section>
        < Gallery />

        <section className='bg-event-blue flex flex-col justify-center items-center text-white text-center py-5 my-24' id='events'>
        <h2 className='text-[32px]'>Quote of the week</h2>
        <img src="./images/Pastor-Chris.jpg" alt="" className='w-[272px] rounded-[20px] mt-6 lg:w-[500px]' loading='lazy' />
        <p className='text-xs px-16 pt-4 leading-[20px]'><span className='font-pontano text-[40px]'>“</span>
        When God decides to favour you, all men will be in awe of you. </p>
        <p className='font-zhi-mang-xing text-xl'>~Pastor Chris</p>

        <div className='pt-4 leading-9'>
            <p className='px-12 text-md font-semibold'>Sunday Light Fellowship</p>
            <p className=' text-xs'>( Feb 18th 2023 )</p>
        </div>
        </section>

        <section className='flex flex-col justify-center items-center text-center bg-gallery-blue mt-12 py-6 text-white'>
        <h2 className='text-[32px]'>Picture of the week</h2>
        <div>
            <img src="./images/img2.png" alt="" className='my-6 w-[272px] rounded-[20px] lg:w-[500px]' loading='lazy'/>
        </div>
        <div className='pt-4 leading-9'>
            <p className='px-12 text-md font-semibold'>Sunday Light Fellowship</p>
            <p className=' text-xs'>( Feb 18th 2023 )</p>
        </div>
        </section>

        <section className='flex flex-col justify-center items-center text-center my-12 text-xs lg:pb-12'>

            <h2 className='text-[32px] text-primary-blue '>Support Us</h2>
            <div className='lg:flex justify-between lg:w-full lg:pt-12 lg:px-16'>
                <div className='py-4'>
                    <p>Bank: First Bank</p>
                    <p>Acc No: 1490256593</p>
                    <p>Watchman Cammpus Fellowship UNN</p>
                </div>
                <div className='py-4'>
                    <p>Bank: First Bank</p>
                    <p>Acc No: 1490256593</p>
                    <p>Watchman Cammpus Fellowship UNN</p>
                </div>
                <div className='py-4'>
                    <p>Bank: First Bank</p>
                    <p>Acc No: 1490256593</p>
                    <p>Watchman Cammpus Fellowship UNN</p>
                </div>
            </div>
           
        </section>
    </main>
  )
}

export default Content