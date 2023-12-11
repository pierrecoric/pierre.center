import { useRef, useState } from 'react';
import React, {Ref, useEffect, useCallback} from 'react';
import './App.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Card } from './components/Card.jsx';
import { Footer } from './components/Footer.jsx';
import listOfProjects from './listOfProjects.jsx';
import './intro.css';

function App() {
  let amountPage = 2.55;

  //I just need a function to set the amount of page. the amount of page is on lg the amount of projects / 4 as a integer
  const footerRef = useRef();
  const parallax = useRef();
  const handleScroll = () => {
    if (parallax.current) {
      const theFooter = footerRef.current;

      console.log(parallax.current.current)
      if(parallax.current.current > 210) {
        theFooter.classList.remove('md:top-0');
        theFooter.classList.add('md:bottom-0');
      }
      else {
        theFooter.classList.add('md:top-0');
        theFooter.classList.remove('md:bottom-0');
      }
    }
  }
  
  useEffect(() => {
    const container = document.querySelector('.my-class-name')
    container.addEventListener('scroll', handleScroll)
    return () => {
      container.removeEventListener('scroll', handleScroll)
    }
  }, [footerRef])

  return (
    <>
    <Parallax pages={amountPage} 
    ref={parallax} 
    className='my-class-name'
    style={{
      backgroundColor: '#fecaca'
    }}
    >
      <ParallaxLayer 
        speed={4}
        factor={1.5}
        style={{
          backgroundImage: 'url(/images/curves/1.svg)',
          backgroundSize: 'cover'
        }}
      />
      <ParallaxLayer factor={0.5} speed={1.6}>
        <div className='mt-12 md:mt-24 h-full flex items-center justify-center'>
          <div className='w-[90%] md:w-3/4 lg:w-1/2 xl:1/3 flex flex-col md:flex-row justify-between items-center'>
            <div className='flex items-center justify-center w-1/2 mb-5 md:mb-0'>
              <div className='pierreId w-44 h-44 md:w-60 md:h-60 bg-cover rounded-full border-red-200 border-8'>
              </div>
            </div>
            <div className='w-full md:w-1/2 flex items-center justify-center'>
              <div className='font-avni leading-snug text-[13pt] text-white text-center md:text-left'>
                <h1 className='font-helv text-[26pt] font-bold mb-5 tracking-tight'>LOREM IPSUM</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint rem, perferendis optio amet, natus id quaerat aperiam unde delectus facere voluptate possimus quod nostrum obcaecati facilis molestiae est incidunt tempora.
                s</p>
              </div>
            </div>
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer speed={1.2} offset={0.5}>
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
    <Footer footerRef={footerRef} />
    </>
  )
}

export default App




