import React, { useState, useEffect, useRef } from 'react';
import breakpoints from '../breakpoints';

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
        divHeight = (3 / 2) * divWidth;
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
    <div id={`cardDiv${props.id}`} className="card col-span-1 flex items-center justify-center hover:cursor-pointer transition-all" style={{ height: `${height}px` }} ref={cardDivRef} onClick={() => clickCard(props.id, props.image)}>
      <div id={`picture${props.id}`} className="w-full h-full rounded-xl bg-cover bg-center transition-all" style={{ backgroundImage: `url('/images/${props.image}.jpg')` }}>
        <div id={`content${props.id}`} className='contentCard w-full h-full rounded-xl bg-slate-50 opacity-90 hidden'>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <a href={`${props.link}`}>{props.link}</a>
          <p>{props.github}</p>
        </div>
      </div>
    </div>
  );
};
