import React, {useState} from "react";



export const Insert = (props) => {
    
    const closeInsert = () => {
        const inserts = document.querySelectorAll('.insert');
        inserts.forEach(insert => {
            alert("coucou");
            insert.classList.remove('block');
            insert.classList.add('hidden');
          });
    }

    const containerClass = `fixed rounded-none md:rounded-lg w-full h-[90%] md:w-[60vw] md:ml-[20vw] md:h-[70vh] md:mt-[15vh] bg-white flex items-center justify-center`;

    return (
        <div className={containerClass}>
            <div className="w-[90%] h-[90%] flex-col">
                <div className="w-full flex justify-end mb-12">
                    <button onClick={() => closeInsert()}>
                        X
                    </button>
                </div>
                <div className="w-full h-full flex flex-col items-center ">
                    <div className="w-full h-auto max-h-[80%] overflow-scroll">
                        {props.content}
                    </div>
                </div>
            </div>
        </div>
    );
}