import React from 'react';
import heroImg from '../../assets/images/oliver.jpg';


const Hero=()=>{
    return(
        <section className='pt-0' id='about'>
            <div className="container pt-14">
                <div className='md:flex items-center justify-center sm:flex-col md:flex-row'>
                    {/*=========hero left content*/}
                    <div className="w-full md:basis-3/4">
                        <h5 data-aos='fade-right' data-aos-duration='1500' className='text-headingColor font-[600] text-[16px] justify-center items-center'>Hello Welcome!</h5>
                        <h1 data-aos='fade-up' data-aos-duration='1500' className='text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5'>I am Valivar Fernandes <br/> Information Science Engineer</h1>
                        <div data-aos='fade-up' data-aos-duration='1800' data-aos-delay="200" className="flex items-center gap-6 mt-7">
                            <a href="https://drive.google.com/file/d/1Hkkj0ivQWv9T8ZJmRQ1RbiyrJeAAhpaq/view?usp=drivesdk">
                                <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'>
                                Resume
                                </button>

                            </a>
                            
                            </div>   
                       
                        <p data-aos='fade-left' data-aos-duration='1500' 
                        className='flex gap-2 text-headingColor mt-12 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-6 flex-col'>
                            <span>
                            <i class="ri-apps-line"></i>
                            </span> Greetings! I'm Valivar A Fernandes, currently pursuing a BE in Information Science and Engineering. My passion lies in becoming a skilled software developer, driven by a desire to address real-world issues through technology. Beyond coding, I find solace in crafting, Listening Music, Cooking,Travelling. Embracing the spirit of continuous learning, I spend my free time exploring new technologies and nurturing friendships. Join me in my journey of merging creativity and innovation!</p>
                      


                        
                        </div>
               
                    {/*===============hero left end===========*/}
                    {/*================hero img===========*/}
                    <div className='basis-1/3 mt-10 sm:mt-[0px]'>
                        <figure className="flex items-center justify-center ">
                            <img className='rounded-full  h-[395px] border-solid' src={heroImg} alt=""/>
                        </figure>
                    </div>
                    {/*==========hero img end============*/}
                   
                     {/*==========hero content right============*/}
                    
                      {/*==========hero content right end============*/}
                    </div>
                
               
            </div>

        </section>
    )
}
export default Hero;