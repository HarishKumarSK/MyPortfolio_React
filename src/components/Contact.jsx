import React from 'react'

const Contact = () => {
  const config = {
    line1: 'If you want to discuss more in detail, please contact me'
};
  return (
    <section id="contact" className='h-5/6 p-5 bg-slate-500 leading-5 text-white'>
            <div className="contact-container">
                <h1>Contact</h1>
                <p className="contact-text">{config.line1}</p>
                <p className="contact-info"> <strong className='text-orange-400'>Email:</strong> skhareshkumar@gmail.com</p>
                <p className="contact-info"><strong className='text-orange-400'>Phone:</strong> 7010379318</p>
            </div>
    </section>
  )
}

export default Contact
