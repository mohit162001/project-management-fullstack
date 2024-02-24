import React from 'react'
import '../styles/sidebar.css'
import Button from './Button';
function SideBar({handleSelectedProject,projects,handleProjectDisplay}) {
  console.log(projects)
  return (
    <aside>
        <h2>Your Projects</h2>
        <div>
            <Button onClick={handleSelectedProject}>Add Project</Button>
        </div>
        <ul>{projects.map((project)=>{
          return <li key={project.id}>
            <button onClick={()=>handleProjectDisplay(project.id)} className='project-btn'>{project.title}</button>
          </li>
        })}</ul>
    </aside>
  )
}

export default SideBar;