import { useRef, useState } from 'react';
import React, {Ref, useEffect, useCallback} from 'react';
import './App.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Card } from './components/Card.jsx';
import { Footer } from './components/Footer.jsx';
import listOfProjects from './listOfProjects.jsx';
import './intro.css';
import breakpoints from './components/breakpoints.jsx'; 

function App() {

  const footerRef = useRef();
  
  useEffect (() => {

  window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const theFooter = footerRef.current;
    if (scrollPosition > 500 && theFooter) {
      theFooter.classList.remove('md:top-0');
    }
    else {
      theFooter.classList.add('md:top-0');
    }
    const newPosition = scrollPosition * 0.8; 
    document.getElementById('background-main').style.backgroundPositionY = `-${newPosition}px`;
  });
})


  return (
    <>
      <Footer footerRef={footerRef} />
      <div id="background-main" style={{backgroundColor: '#fecaca'}}>
        <div className='h-full flex items-center justify-center'>
          <div className='w-[90%] md:w-3/4 lg:w-1/2 xl:1/3 flex flex-col justify-between items-center mt-24'>
            <div className='flex items-center justify-center w-1/2 mt-5 mb-5 md:mb-0'>
              <div className='pierreId w-44 h-44 md:w-60 md:h-60 bg-cover rounded-full border-red-200 border-8'>
              </div>
            </div>
            <div className='w-full md:w-1/2 flex items-center justify-center'>
              <div className='font-avni leading-snug text-[13pt] text-white text-center md:text-left'>
                <h1 className='font-helv text-[26pt] font-bold mt-5 mb-5 md:mb-12 md:mt-12 tracking-tight'>I CODE [ THINGS ]</h1>
                <p>
                  Hello, I am Pierre Coric.
                  <br/>I am a visual artist and self-thaught developer. 
                  <br/>I use computer programming as one of the tools of my creative process and I am happy to share my skills with other to implement their ideas according to their means and goals.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-12 md:mt-28 flex items-center justify-center'>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-7 w-[90%] mb-[50px] lg:mb-[100px]'>
            {listOfProjects.map((project, key) => {
              return <Card 
              id={key}
              title={project.title} 
              description={project.description} 
              image={project.image}
              linkText={project.linkText}
              link={project.link}
              gh={project.gh}
              github={project.github}
              />
              })
            }
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App




