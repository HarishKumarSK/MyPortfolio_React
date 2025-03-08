import React from 'react'

const Footer = () => {
  return (
    <footer className="footer ">
      <div className="footer-container">
        <p className='text-slate-400'>© 2025 <span className='text-orange-600 text-xl'>S K HARISH KUMAR </span>. Web Developer</p>
        <div className="footer-social">
          <a href="https://github.com/dashboard" target='_blank'><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/harishkumarsk/" target='_blank'><i className="fab fa-linkedin"></i></a>
          <a href="https://wa.me/7010379318" target='_blank'><i className="fab fa-whatsapp"></i></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
