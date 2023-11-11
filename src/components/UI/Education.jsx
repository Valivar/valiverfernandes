import React from 'react';
import frontendImg from '../../assets/images/front-end.png'
import backendImg from '../../assets/images/backend.png'
import uiImg from '../../assets/images/design.png'
import appImg from '../../assets/images/apps.png'
const Education = () => {
  return (
    <section id="education" className='pt-0'>
      <div className="container lg:pt-1">
        <div className="text-center">
          <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">Skills</h2>
          <p className="lg:max-w-[800px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7">
          A successful career hinges on a balance of technical expertise and interpersonal skills. Technical skills are the bedrock of job competence, enabling efficient problem-solving and task execution. Interpersonal skills, on the other hand, foster effective communication, teamwork, and conflict resolution, ultimately fostering positive work relationships and a collaborative atmosphere. Striking this balance is essential for personal success and for creating a thriving work environment.
          </p>
        </div>

        <div className="flex justify-center sm:py-10"> {/* Added 'justify-center' here */}
          <div className="w-full py-3 px-2 sm:max-w-xr sm:max-auto sm:px-0">
            <div className="relative text-gray-700 antialized text-sm font-semibold">
              {/*=================vertical line==================*/}
              <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2"></div>

              {/*=================left card=====================*/}
              <div className="mt-6 sm:mt-0 sm:mb-8">
                <div className="flex items-center flex-col sm:flex-row">


                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 pr-8"> {/* Removed extra 's,' typo here */}
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font[600] text-2xl">
                          Full Stack Developer
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          HTML, CSS, Javascript, React JS,Node JS,Node JS,MySQL,MongoDB
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                    <figure>
                      <img src={frontendImg} alt=''/>
                    </figure>

                  </div>


                </div>
              </div>
              {/*=======================right card=================*/}
              <div className="mt-4 sm:mt-0 sm:mb-8">
                <div className="flex items-center flex-col sm:flex-row">


                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 pl-8"> {/* Removed extra 's,' typo here */}
                      <div
                        data-aos="fade-left"
                        data-aos-left='50'
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font[600] text-2xl">
                          Programming Languages
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          C, C++, Java, Python
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                    <figure>
                      <img src={backendImg} alt=''/>
                    </figure>

                  </div>


                </div>
              </div>


              {/*=================left card=====================*/}
              <div className="mt-4 sm:mt-0 sm:mb-8">
                <div className="flex items-center flex-col sm:flex-row">


                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 pr-8"> {/* Removed extra 's,' typo here */}
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font[600] text-2xl">
                          Cloud platform
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          Google Cloud, AWS
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                    <figure>
                      <img src={uiImg} alt=''/>
                    </figure>

                  </div>


                </div>
              </div>
              {/*=======================right card=================*/}
              <div className="mt-4 sm:mt-0 sm:mb-8">
                <div className="flex items-center flex-col sm:flex-row">


                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 pl-8"> {/* Removed extra 's,' typo here */}
                      <div
                        data-aos="fade-left"
                        data-aos-delay='50'
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font[600] text-2xl">
                        Mobile Application Development
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                        Android Studio
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                    <figure>
                      <img src={appImg} alt=''/>
                    </figure>

                  </div>


                </div>
              </div>
              {/*==============left card=============*/}
              <div className="mt-4 sm:mt-0 sm:mb-8">
                <div className="flex items-center flex-col sm:flex-row">


                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 pr-8"> {/* Removed extra 's,' typo here */}
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font[600] text-2xl">
                          Other Skills
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          Canva, Arduino, Microsoft Office, Git
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                    <figure>
                      <img src={uiImg} alt=''/>
                    </figure>

                  </div>


                </div>
              </div>
              {/*=======right card==============*/}
              <div className="mt-4 sm:mt-0 sm:mb-8">
                <div className="flex items-center flex-col sm:flex-row">


                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 pl-8"> {/* Removed extra 's,' typo here */}
                      <div
                        data-aos="fade-left"
                        data-aos-delay='50'
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font[600] text-2xl">
                        Interpersonal Skills
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          Presentation, Leadership, Quick Learner, Problem solving, Communication
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                    <figure>
                      <img src={appImg} alt=''/>
                    </figure>

                  </div>


                </div>
              </div>



            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
