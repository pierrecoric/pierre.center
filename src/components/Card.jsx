import React, { useState, useEffect } from 'react';

export const Card = (props) => {
    //initializing the dimensions of the card
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    useEffect(() => {
        // Function to update width and height
        const updateDimensions = () => {
          const divWidth = cardDiv.offsetWidth;
          const divHeight = (3 / 2) * divWidth;
          setWidth(divWidth);
          setHeight(divHeight);
        };
        // Initial dimensions update
        updateDimensions();
        // Event listener for window resize
        window.addEventListener('resize', updateDimensions);
        // Cleanup function to remove the event listener when the component unmounts //STILL MYSTERIOUS
        return () => {
          window.removeEventListener('resize', updateDimensions);
        };
      });

    return(
        <div id="cardDiv" className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5  bg-cover bg-center" style={{ backgroundImage: `url('/images/${props.image}.jpg')`, height: `${height}px` }} ref={(div) => (cardDiv = div)}>
            {/*<img className="w-1/3" src={`/images/${props.image}.jpg`}/>*/}
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <a href={`${props.link}`}>{props.link}</a>
            <p>{props.github}</p>
        </div>
    );
}





