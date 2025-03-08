import React from 'react'
import img1 from "/src/assets/udemyprjpic.jpg"
import img2 from "/src/assets/clossiyprjpic.jpg"
import img3 from "/src/assets/greendenprjpic.jpg"
const Projects = () => {
    const config = {
        projects: [
            {
                image: img1,
                description: 'A Udemy Clone. Built with HTML, CSS, JS',
                link: 'https://harishkumarsk.github.io/Udemy-Project/'
            },
            {
                image: img2,
                description: 'An E-commerce Website. Built with HTML, CSS, JS.',
                link: 'https://harishkumarsk.github.io/Clossiy_Fashions/'
            },
            {
                image: img3,
                description: 'An Flower Shop Website. Built with HTML, Tailwind CSS.',
                link: 'https://harishkumarsk.github.io/GreenDen/'
            }
        ]
    };
  return (
    <section id="projects">
    <div className="projects-container">
    <div className="projects-header">
        <h1>Projects</h1>
        <p>These are some of my best projects. I have built them with HTML, CSS, Tailwind CSS,and JavaScript. Check them out.</p>
     </div>
    <div className="projects-grid">
        {config.projects.map((project, index) => (
        <div className="project-card" key={index}>
        <img className="project-image" src={project.image} alt="Project Preview" />
        <div className="project-desc">
        <p>{project.description}</p>
        <a className="view-project-btn" target="_blank" rel="noopener noreferrer" href={project.link}>View Project</a>
        </div>
        </div>
 ))}
    </div>
    </div>
    </section>
  )
}

export default Projects
