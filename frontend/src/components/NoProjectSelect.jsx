import React from 'react'
import '../styles/noprojectselected.css'
import Button from './Button'
import noproject_img from './assets/project_icon.png'
function NoProjectSelect({handleSelectedProject}) {
  return (
    <div className='noproject-container'>
        <img src={noproject_img} alt="" />
        <h2 id='noproject-h2'>No project Selected</h2>
        <p id='noproject-p1'>Select a project or get stared with new one</p>
        <p id='noproject-p2'>
            <Button onClick={handleSelectedProject}>Create new Project</Button>
        </p>
    </div>
  )
}

export default NoProjectSelect