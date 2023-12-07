import { useState } from 'react';
import './App.css';
import { Card } from './components/Card.jsx';
import { Footer } from './Footer.jsx';
import listOfProjects from './listOfProjects.jsx';

function App() {

  return (
    <>
    <div className='bg-slate-100 flex items-center justify-center'>
      <div className='flex flex-wrap w-[100%]'>
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
    </div>
    <div>
      <Footer />
    </div>
    </>
  )
}

export default App




