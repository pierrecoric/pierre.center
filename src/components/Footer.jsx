import './card.css';
import React, {useEffect, useRef} from 'react';


export const Footer = ({ footerRef }) => {
    useEffect(() => {
        const theFooter = footerRef.current;
      }, [footerRef]);

    return(
        <div id="theFooter" className="font-avni text-[13pt] flex justify-center items-center h-24 bg-white fixed bottom-0 md:top-0 w-full transition-all duration-1000" ref={footerRef}>
            <div className="flex flex-col md:flex-row justify-between w-[90%]">
                <div className="hidden md:inline">
                    <h1 className="text-[26pt] font-bold inline tracking-tight font-helv">pierre.center</h1>
                </div>
                <div className="hidden lg:flex items-center">
                    The index of [things]  that I made with code
                </div>
                <div className="flex items-center justify-center">
                    <a className="hover:text-orange-500 mr-6">about me</a>
                    <a className="hover:text-orange-500 mr-6">contact</a>
                    <a className="hover:text-orange-500 mr-6">resume</a>
                    <a className='inline h-8 w-8 bg-cover ghLogo' href="https://github.com/pierrecoric" target="_blank"></a>
                </div>
            </div>
        </div>
    );
};



