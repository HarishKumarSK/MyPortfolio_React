// import React from 'react'
// // import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import '../Style.css';

// // import required modules
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import htmlsvg from "/src/assets/html-5-svg.svg"
// import csssvg from "/src/assets/css-3-svg.svg"
// import tailcsssvg from "/src/assets/tailwindcss-svg.svg"
// import jssvg from "/src/assets/javascript-svg.svg"
// import reactsvg from "/src/assets/react-svg.svg"
// import javasvg from "/src/assets/java-svg.svg"
// import mysqlsvg from "/src/assets/mysql-svg.svg"
// import gitsvg from "/src/assets/git-svg.svg"
// import githubsvg from "/src/assets/github-svg.svg"
// const Skills = () => {
//   return (
//     <div className='slideskills'>
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         className="mySwiper"
//       >
//         <SwiperSlide><img src={htmlsvg} alt="html SVG"/></SwiperSlide>
//         <SwiperSlide><img src={csssvg} alt="html SVG"/></SwiperSlide>
//         <SwiperSlide><img src={tailcsssvg} alt="html SVG"/></SwiperSlide>
//         <SwiperSlide><img src={jssvg} alt="html SVG"/></SwiperSlide>
//         <SwiperSlide><img src={reactsvg} alt="html SVG"/></SwiperSlide>
//         <SwiperSlide><img src={javasvg} alt="html SVG"/></SwiperSlide>
//         <SwiperSlide><img src={mysqlsvg} alt="html SVG"/></SwiperSlide>
//         <SwiperSlide><img src={gitsvg} alt="html SVG"/></SwiperSlide>
//         <SwiperSlide><img src={githubsvg} alt="html SVG"/></SwiperSlide>
//       </Swiper>
//     </div>
//   )
// }

// export default Skills

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay';

import '../Style.css';

import { Autoplay } from 'swiper/modules';
import htmlsvg from "/src/assets/html-5-svg.svg";
import csssvg from "/src/assets/css-3-svg.svg";
import tailcsssvg from "/src/assets/tailwindcss-svg.svg";
import jssvg from "/src/assets/javascript-svg.svg";
import reactsvg from "/src/assets/react-svg.svg";
import javasvg from "/src/assets/java-svg.svg";
import mysqlsvg from "/src/assets/mysql-svg.svg";
import gitsvg from "/src/assets/git-svg.svg";
import githubsvg from "/src/assets/github-svg.svg";

const Skills = () => {
  return (
    <div id='skills' className='slideskillspar'>
      <h1 className='slideh1'>My Skills</h1>
      <div className="slideskills">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className='swipename'><img src={htmlsvg} alt="HTML SVG" className="skill-img" />HTML</SwiperSlide>
        <SwiperSlide className='swipename'><img src={csssvg} alt="CSS SVG" className="skill-img" />CSS</SwiperSlide>
        <SwiperSlide className='swipename'><img src={tailcsssvg} alt="Tailwind CSS SVG" className="skill-img" />Tailwind CSS</SwiperSlide>
        <SwiperSlide className='swipename'><img src={jssvg} alt="JavaScript SVG" className="skill-img" />JavaScript</SwiperSlide>
        <SwiperSlide className='swipename'><img src={reactsvg} alt="React SVG" className="skill-img" />React</SwiperSlide>
        <SwiperSlide className='swipename'><img src={javasvg} alt="Java SVG" className="skill-img" />JAVA</SwiperSlide>
        <SwiperSlide className='swipename'><img src={mysqlsvg} alt="MySQL SVG" className="skill-img" />MYSQL</SwiperSlide>
        <SwiperSlide className='swipename'><img src={gitsvg} alt="Git SVG" className="skill-img" />Git</SwiperSlide>
        <SwiperSlide className='swipename'><img src={githubsvg} alt="GitHub SVG" className="skill-img" />GitHub</SwiperSlide>
      </Swiper>
    </div>
    </div>
  );
};

export default Skills;
