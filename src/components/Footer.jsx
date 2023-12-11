import './card.css';
import React, {useEffect} from 'react';


export const Footer = () => {
    useEffect(() => {
        let theFooter = document.getElementById("theFooter")
        const handleScroll = () => {
            console.log('scrolling');
            let scrollPosition = window.scrollY;
            console.log(scrollPosition);
            if (scrollPosition >= 200) {
            theFooter.classList.remove('top-0');
            theFooter.classList.add('bottom-0');
          } 
          else {
            theFooter.classList.add('top-0');
            theFooter.classList.remove('bottom-0');
          }
        };

        // Attach the event listener when the component mounts
        window.addEventListener("scroll", handleScroll);
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

    return(
        <div id="theFooter" className="flex justify-center items-center h-24 bg-white fixed bottom-0 md:top-0 w-full transition-all duration-1000">
            <div className="flex flex-col md:flex-row justify-between w-[90%]">
                <div className="hidden md:inline">
                    <h1 className="text-xl font-bold inline tracking-tight">pierre.center</h1>
                </div>
                <div className="hidden lg:inline">
                    The index of  <span className='tracking-widest'>[things]</span>  that I made with code
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



