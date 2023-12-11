import React, { useState, useEffect, useRef } from 'react';
import breakpoints from '../breakpoints';
import './card.css';

export const Card = (props) => {
  //to hold the dimensions of the cards
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  //to hold the ref to the card
  const cardDivRef = useRef(null);

  //useEffect hook:
  useEffect(() => {
    //creating a function to change the dimensions of the components.
    const updateDimensions = () => {
      cardsReset();
      const divWidth = cardDivRef.current.offsetWidth;
      //here add conditions according to the size of the window
      let divHeight = (1) * divWidth;
      if (window.innerWidth > breakpoints.md) {
        divHeight = (3 / 2.1) * divWidth;
      }
      setWidth(divWidth);
      setHeight(divHeight);
    };
    //calling the function once when the component mounts
    updateDimensions();
    //calling the function whenever the dimensions of the window change
    window.addEventListener('resize', updateDimensions);
    //cleanup function
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);//empty array of dependencies

  const cardsReset = () => {
    //get all the other cards
    const allCards = document.querySelectorAll('.card');
    const allContentCards = document.querySelectorAll('.contentCard');
    // Loop through all cards and reset them
    allCards.forEach(card => {
      card.classList.remove('col-span-2', 'hidden', 'open');
      card.classList.add('col-span-1');
    });
    allContentCards.forEach(card => {
      card.classList.add('hidden');
    });
  }

  const clickCard = (id, image) => {


    //get the clicked card
    const clickedDiv = document.getElementById(`cardDiv${id}`);
    //get the content of the sub div
    const contentDiv = document.getElementById(`content${id}`);

    //create the div to hide
    let divToHide = (null)    
    //initiate how many cols we have here
    let cols = 4;
    let extraCol = 2;
    //if the window is smaller than lg
    if (window.innerWidth < breakpoints.lg) {
      cols = 3;
      extraCol = 1;
    }
    //check which div to hide
    if(id%cols < cols - extraCol) {
      divToHide = document.getElementById(`cardDiv${id+1}`);
    }
    else {
      divToHide = document.getElementById(`cardDiv${id-1}`);
    }

    //if the window is bigger than medium
    if (window.innerWidth > breakpoints.md) {
      //if the card is open, closes it
      if (clickedDiv.classList.contains('open')) {
        cardsReset();
      }
      //otherwise, open it. Starts by hidding the neighbor
      else {
        cardsReset();
        if (divToHide != null) {
          divToHide.classList.add('hidden');
        }
        clickedDiv.classList.remove('col-span-1');
        clickedDiv.classList.add('col-span-2', 'open');
        contentDiv.classList.remove('hidden');
      }
    }
    //if the window is smaller than medium
    else {
      if(clickedDiv.classList.contains('open')) {
        cardsReset();
      }
      else {
        cardsReset();
        clickedDiv.classList.add('open');
        contentDiv.classList.remove('hidden');
      }
    }
  }

  return (
    <div id={`cardDiv${props.id}`} className="card col-span-1 flex items-center justify-center hover:cursor-pointer transition-all duration-1000" style={{ height: `${height}px` }} ref={cardDivRef} onClick={() => clickCard(props.id, props.image)}>
      <div id={`picture${props.id}`} className="w-full h-full rounded-xl bg-cover bg-center transition-all duration-1000" style={{ backgroundImage: `url('/images/${props.image}.jpg')` }}>
        <div id={`content${props.id}`} className='font-avni contentCard w-full h-full rounded-xl backdrop-blur-md bg-white/70 p-10 flex flex-col justify-between overflow-scroll transition-all duration-1000'>
          <div>
            <h1 className='font-helv text-xl font-bold mb-5 tracking-tight'>{props.title}</h1>
            <p className='mb-2'>{props.description}</p>
          </div>
          <div className='mt-5'>
            <a className='underline text-orange-500 hover:text-black' href={`${props.link}`} target="_blank">{props.link}</a>
            <a className='block mt-5 h-8 w-8 bg-cover ghLogo' href={`${props.github}`} target="_blank"></a>
          </div>
        </div>
      </div>
    </div>
  );
};
