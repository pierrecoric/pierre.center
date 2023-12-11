import { useState } from 'react';
import './App.css';
import { Card } from './components/Card.jsx';
import { Footer } from './components/Footer.jsx';
import listOfProjects from './listOfProjects.jsx';

function App() {

  return (
    <>
    <div>Little presentation</div>
    <div className='bg-red-200 flex items-center justify-center'>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-9 w-[90%]'>
        {listOfProjects.map((project, key) => {
          return <Card 
          id={key}
          title={project.title} 
          description={project.description} 
          image={project.image}
          link={project.link}
          github={project.github}
          />
         })
        }
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default App




