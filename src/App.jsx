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
  //the parallax component cannot be updated dynamically so its height counted in pages must be computed before start...
  let amountPages = 3;
  //function to calculate the amount of rows needed in this page
  const amountRows = () => {
    let divider = 1;
    if (window.innerWidth > breakpoints.md) {
      divider = 3
    }
    if (window.innerWidth > breakpoints.lg) {
      divider = 4
    }
    return Math.ceil(listOfProjects.length / divider);
  }
  //compute the height of the div cards
  const heightCard = () => {
    let winWidth = window.innerWidth;
    let cardWidth = 0;
    let cardHeight = 0;
    if(winWidth > breakpoints.lg) {
      cardWidth = winWidth * 0.9
      cardWidth = cardWidth - (36 * 3)
      cardWidth = cardWidth / 4
      cardHeight = cardWidth * (3 / 2);
    }
    else if (winWidth > breakpoints.md) {
      cardWidth = winWidth * 0.9
      cardWidth = cardWidth - (36 * 2)
      cardWidth = cardWidth / 3
      cardHeight = cardWidth * (3 / 2);
    }
    else {
      cardWidth = winWidth * 0.9
      cardHeight = cardWidth * (5 / 4);
    }
    return cardHeight;
  }
  //compute the amount of pages 
  const computeAmountPages = () => {
    let amount = 0;
    amount = amountRows() * heightCard();
    amount = amount / window.innerHeight;
    amount = amount * 0.9;
    return amount
  }
  //compute the actual amount of pages
  amountPages = computeAmountPages();
  

  const footerRef = useRef();
  const parallax = useRef();

  const handleScroll = () => {
    if (parallax.current) {
      const theFooter = footerRef.current;
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
    const container = document.querySelector('.my-class-name');
    container.addEventListener('scroll', handleScroll);
    return () => {
      container.removeEventListener('scroll', handleScroll);
    }
  }, [footerRef, parallax])

  return (
    <>
    <Parallax pages={amountPages} 
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
                <h1 className='font-helv text-[26pt] font-bold mb-5 tracking-tight'>I CODE [ THINGS ]</h1>
                <p>
                  Hello, I am Pierre Coric.
                  <br/>I am a visual artist and self-thaught developer. 
                  <br/>I use computer programming as one of the tools of my creative process and I am happy to share my skills with other to implement their ideas according to their means and goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer speed={0.7} offset={0.5}>
        <div className='mt-28 md:mt-24 flex items-center justify-center'>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-9 w-[90%]'>
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
      </ParallaxLayer>
    </Parallax>
    <Footer footerRef={footerRef} />
    
   
    </>
  )
}

export default App




