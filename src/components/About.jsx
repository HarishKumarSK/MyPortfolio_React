import React from 'react'
import aboutimg from "/src/assets/aboutimg01.png"
import {PhoneIcon} from "@heroicons/react/24/solid"
const About = () => {
  return (
   <div className='about_container text-center md:text-left justify-center items-center h-4/5'>
     <div className="p-10 flex flex-col-reverse md:flex gap-3 md:flex-row justify-center md:justify-center items-center">
    {/* <h1 className="text-3xl font-bold" id='about'>About Me</h1> */}
      <img src={aboutimg} alt="aboutimg1" className='w-96 h-3/6'/>
      <div className=''>
      <h1 className="text-3xl font-bold leading-10" id='about'><u>About Me</u></h1>
      <p className='leading-10 text-1xl text-blue-900 font-semibold'>Hi, My name is S K Harish Kumar. I am a Web developer.</p>
      <p className='leading-10 text-1xl text-blue-900 font-semibold'>I build beautiful websites with React.js, Tailwind CSS, and Bootstrap.</p>
      <p className='leading-10 text-1xl text-blue-900 font-semibold'>I am proficient in frontend skills like React.js, HTML, CSS, JavaScript, Tailwind CSS, CSS3, and many more.</p>
      <p className='leading-10 text-1xl text-blue-900 font-semibold'>I also have experience in cloud services, AWS, Git, and GitLab.</p>
      </div>
    </div>
    {/* <PhoneIcon className="w-4 h-5 bg-purple-400 relative left-1/2 bottom-1/2"></PhoneIcon> */}
   </div>
  )
}

export default About
