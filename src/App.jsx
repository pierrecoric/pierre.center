import { useState } from 'react';
import './App.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Card } from './components/Card.jsx';
import { Footer } from './components/Footer.jsx';
import listOfProjects from './listOfProjects.jsx';
import './intro.css';

function App() {

  return (
    <>
    <Parallax pages={3}>
      <ParallaxLayer 
        speed={0.3}
        factor={4}
        style={{
          backgroundImage: 'url(/images/canada.jpg)',
          backgroundSize: 'cover'
        }}
      />
      <ParallaxLayer factor={0.5} speed={1.7}>
        <div className='mt-12 md:mt-24 h-full flex items-center justify-center'>
          <div className='w-[90%] md:w-3/4 lg:w-1/2 xl:1/3 flex flex-col md:flex-row justify-between items-center'>
            <div className='flex items-center justify-center w-1/2 mb-5 md:mb-0'>
              <div className='pierreId w-44 h-44 md:w-60 md:h-60 bg-cover rounded-full'>
              </div>
            </div>
            <div className='w-full md:w-1/2 flex items-center justify-center'>
              <div className='text-white text-center md:text-left'>
                <h1 className='font-bold mb-5 tracking-tight'>COUCOU TOUT LE MONDE</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint rem, perferendis optio amet, natus id quaerat aperiam unde delectus facere voluptate possimus quod nostrum obcaecati facilis molestiae est incidunt tempora.
                s</p>
              </div>
            </div>
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer speed={1} factor={2} offset={0.5}>
        <div className='mt-28 md:mt-24 flex items-center justify-center'>
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
      </ParallaxLayer>
    </Parallax>
    <Footer />
    </>
  )
}

export default App




