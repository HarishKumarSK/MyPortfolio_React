import React, { useEffect } from "react";
import portfolioimg from "/src/assets/port2.png";

const Hero = () => {
  useEffect(() => {
    let typedInstance;
    const element = document.getElementById("typed");
    if (window.Typed) {
      typedInstance = new window.Typed(element, {
        strings: ["I'm HK", "I'm Harish Kumar"],
        typeSpeed: 50,
        backSpeed: 30,
        loop: false,
        showCursor: false,
      });
    }
    return () => {
      if (typedInstance) {
        typedInstance.destroy();
      }
    };
  }, []);

  return (
    <div id="home" className="hero_container text-blue-950 min-h-screen w-full flex flex-col md:flex-row items-center justify-center px-6 md:px-16 text-center md:text-left gap-6">
      {/* Hero Text Section */}
      <div className="hero_selfintro flex flex-col items-center md:items-start">
        <h1 className="leading-10 text-3xl font-bold">Hi.., ✌️</h1>
        <h1 className="leading-10 text-3xl font-bold" id="typed"></h1>
        <h2 className="leading-10 text-2xl">A Passionate Web Developer</h2>
        <ul className="flex gap-6 mt-3 text-4xl">
          <li className="linkedin transition hover:scale-110">
            <a href="https://www.linkedin.com/in/harishkumarsk/" target="_blank">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li className="whatsapp transition hover:scale-110">
            <a href="https://wa.me//7010379318/" target="_blank">
              <i className="fa-brands fa-square-whatsapp"></i>
            </a>
          </li>
          <li className="github transition hover:scale-110">
            <a href="https://github.com/HarishKumarSK" target="_blank">
              <i className="fa-brands fa-square-github"></i>
            </a>
          </li>
          <li className="resume text-xl">
          <button className="custom-btn btn-6"><span><a href="/public/HARISH_KUMAR_S_K_React.pdf" download="HARISH_KUMAR_S_K_React.pdf">Download CV</a></span></button>
          </li>
        </ul>
      </div>

      {/* Hero Image Section */}
      <div className="hero_img flex justify-center">
        <img src={portfolioimg} alt="Portfolio 2" className="w-full max-w-xs sm:max-w-sm md:max-w-md" />
      </div>
    </div>
  );
};

export default Hero;
