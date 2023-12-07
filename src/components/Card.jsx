import React, { useState, useEffect } from 'react';

export const Card = (props) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateDimensions = () => {
      const divWidth = cardDiv.offsetWidth;
      const divHeight = (3 / 2) * divWidth;
      setWidth(divWidth);
      setHeight(divHeight);
    };

    updateDimensions();
    
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  return (
    <div id="cardDiv" className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 flex items-center justify-center" style={{height: `${height}px` }} ref={(div) => (cardDiv = div)}>
        <div className="bg-cover bg-center hover:cursor-pointer w-[100%] h-[100%] hover:w-[94%] hover:h-[96%] transition-all duration-300 " style={{ backgroundImage: `url('/images/${props.image}.jpg')`}}>
            {/* Your content goes here
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <a href={`${props.link}`}>{props.link}</a>
            <p>{props.github}</p>*/}
        </div>
    </div>
  );
};
