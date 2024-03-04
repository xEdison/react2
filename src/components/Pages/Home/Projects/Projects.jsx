import React from 'react'
import services from '../../../../assets/Sena2.png'
import projects from '../../../../assets/projects.png'
import './Projects.css'
export const Projects = () => {
  return (
<section>
    <h1><img class="Services" src={services} alt='services'/>PROYECTOS</h1>
    
    <div class="contenedor">
      
    <p>TITLE<img className='Projects' src={projects} alt="projects" />  <button className='button'>Ir al proyecto</button></p>     
    <p>TITLE<img className='Projects' src={projects} alt="projects" /> <button className='button'>Ir al proyecto</button></p>     
</div>
<div class="contenedor">
<p>TITLE<img className='Projects' src={projects} alt="projects" /> <button className='button'>Ir al proyecto</button></p>     

<p>TITLE<img className='Projects' src={projects} alt="projects" /> <button className='button'>Ir al proyecto</button></p>     
</div>
      
    
</section>
  )
}
