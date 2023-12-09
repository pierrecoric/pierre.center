import React, { useState, useEffect, useRef } from 'react';

export const Card = (props) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const cardDivRef = useRef(null);

  useEffect(() => {
    const updateDimensions = () => {
      const divWidth = cardDivRef.current.offsetWidth;
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
