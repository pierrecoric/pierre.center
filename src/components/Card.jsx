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
      const divWidth = cardDivRef.current.offsetWidth;
      //here add conditions according to the size of the window
      console.log(breakpoints.lg);
      const divHeight = (3 / 2) * divWidth;
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

  return (
    <div id={`cardDiv${props.id}`} className="col-span-1 flex items-center justify-center" style={{ height: `${height}px` }} ref={cardDivRef}>
      <div className="rounded-xl bg-cover bg-center hover:cursor-pointer w-[100%] h-[100%]" style={{ backgroundImage: `url('/images/${props.image}.jpg')` }}>
        {/* Your content goes here
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <a href={`${props.link}`}>{props.link}</a>
            <p>{props.github}</p>*/}
      </div>
    </div>
  );
};
