import './card.css';
import React, {useState, useEffect, useRef} from 'react';
import { ContactContent } from './ContactContent';
import { InsertContent } from './InsertContent';
import { AboutContent } from './AboutContent';
import { ResumeContent } from './ResumeContent'
import './footer.css'


export const Footer = ({ footerRef }) => {
    const [isVisibleAbout, setIsVisibleAbout] = useState(false);
    const [isVisibleContact, setIsVisibleContact] = useState(false);
    const [isVisibleResume, setIsVisibleResume] = useState(false);

    const toggleInsert = (isVisible, setState) => {
        if (isVisible) {
            handleCross();
        } else {
            handleCross();
            setState(true);
        }
    }

    const handleCross = () => {
        setIsVisibleAbout(false);
        setIsVisibleContact(false);
        setIsVisibleResume(false);
    }

    const toggleInsertAbout = () => {
        toggleInsert(isVisibleAbout, setIsVisibleAbout);
    }
    
    const toggleInsertContact = () => {
        toggleInsert(isVisibleContact, setIsVisibleContact);
    }
    
    const toggleInsertResume = () => {
        toggleInsert(isVisibleResume, setIsVisibleResume);
    }


    useEffect(() => {
        const theFooter = footerRef.current;
      }, [footerRef]);

    return(
        <>
        
        
        <div id="theFooter" className="front font-avni text-[13pt] flex justify-center items-center h-24 bg-white fixed bottom-0 md:top-0 w-full transition-all duration-1000" ref={footerRef}>
            <div className="flex flex-col md:flex-row justify-between w-[90%]">
                <div className="hidden md:inline">
                    <h1 className="text-[26pt] font-bold inline tracking-tight font-helv">pierre.center</h1>
                </div>
                <div className="hidden lg:flex items-center">
                    The index of [things]  that I made with code
                </div>
                <div className="flex items-center justify-center">
                    <a className="hover:text-orange-500 mr-6 hover:cursor-pointer" onClick={() => toggleInsertAbout()}>about me</a>
                    <a className="hover:text-orange-500 mr-6 hover:cursor-pointer" onClick={() => toggleInsertContact()}>contact</a>
                    <a className="hover:text-orange-500 mr-6 hover:cursor-pointer" onClick={() => toggleInsertResume()}>resume</a>
                    <a className='inline h-8 w-8 bg-cover ghLogo' href="https://github.com/pierrecoric" target="_blank"></a>
                </div>
            </div>
        </div>
        {/*About*/}
        <div className={`${isVisibleAbout ? 'fixed' : 'hidden'} front rounded-none md:rounded-lg w-full h-[90%] md:w-[60vw] md:ml-[20vw] md:h-[70vh] md:mt-[15vh] bg-white flex items-center justify-center`}>
            <div className="w-[90%] h-[90%] flex-col">
                <div className="w-full flex justify-end mb-12">
                    <button onClick={() => handleCross()}>
                        X
                    </button>
                </div>
                <div className="w-full h-full flex flex-col items-center ">
                    <InsertContent content = {<AboutContent/>} />
                </div>
            </div>
        </div>
        {/*Contact*/}
        <div className={`${isVisibleContact ? 'fixed' : 'hidden'} front rounded-none md:rounded-lg w-full h-[90%] md:w-[60vw] md:ml-[20vw] md:h-[70vh] md:mt-[15vh] bg-white flex items-center justify-center`}>
            <div className="w-[90%] h-[90%] flex-col">
                <div className="w-full flex justify-end mb-12">
                    <button onClick={() => handleCross()}>
                        X
                    </button>
                </div>
                <div className="w-full h-full flex flex-col items-center ">
                    <InsertContent content = {<ContactContent/>} />
                </div>
            </div>
        </div>
        {/*Resume*/}
        <div className={`${isVisibleResume ? 'fixed' : 'hidden'} front rounded-none md:rounded-lg w-full h-[90%] md:w-[60vw] md:ml-[20vw] md:h-[70vh] md:mt-[15vh] bg-white flex items-center justify-center`}>
            <div className="w-[90%] h-[90%] flex-col">
                <div className="w-full flex justify-end mb-12">
                    <button onClick={() => handleCross()}>
                        X
                    </button>
                </div>
                <div className="w-full h-full flex flex-col items-center ">
                    <InsertContent content = {<ResumeContent/>} />
                </div>
            </div>
        </div>

        </>
    );
};



