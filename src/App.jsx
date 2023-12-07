import { useState } from 'react';
import './App.css';
import { Card } from './components/Card.jsx';
import listOfProjects from './listOfProjects.jsx';

function App() {

  return (
    <>
    <div className='flex flex-wrap'>
    {listOfProjects.map((project, key) => {
      return <Card 
        title={project.title} 
        description={project.description} 
        image={project.image}
        link={project.link}
        github={project.github}
      />
      })
    }
    </div>
    </>
  )
}

export default App




