import React from 'react';
const Contact = () =>{
    return <section id="contact" className="pb-16">
        <div className="container ">
            <h2 className="text-headingColor font-[700] text-[2.5rem] mb-8 ">
                Get in touch 
            </h2>
            <div className="md:flex justify-between items-center bg-indigo-200">
                <div className=" w-full md:w-1/2 h-[300px] sm:h-[450px]">
                <iframe title="google-maps" src="https://www.google.com/maps/place/Vidyavardhaka+College+of+Engineering/@12.336565,76.618745,17z/data=!3m1!4b1!4m6!3m5!1s0x3baf7a5fd7f84b71:0x56edd06e7a72a40!8m2!3d12.336565!4d76.618745!16zL20vMDg4ZHZ6?entry=ttu" 
                className="border-0 w-full h-full  " 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"></iframe>

                </div>

                <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigp-100 px-4 lg:px-8 py-8">
                    <form className="w-full">
                        <div className="mb-5">
                            <input type="text" placeholder='Enter your name' className="w-full p-3 focus:outline-none rounded-[5px]"/>
                        </div>
                        <div className="mb-5">
                            <input type="email" placeholder='Enter your email' className="w-full p-3 focus:outline-none rounded-[5px]"/>
                        </div>
                        <div className="mb-5">
                            <input type="text" placeholder='Subject' className="w-full p-3 focus:outline-none rounded-[5px]"/>
                        </div>
                        <div className="mb-5">
                            <textarea type="text" rows={3} placeholder='Write your message' className="w-full p-3 focus:outline-none rounded-[5px]"/>
                        </div>
                        <button className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150">Send message</button>

                    </form>
                </div>
            </div>
        </div>
    </section>
}
export default Contact