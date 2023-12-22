import React from "react";

export const InsertContent = (props) => {
    return(
        <div className="w-full h-auto max-h-[80%] overflow-scroll font-avni text-[13pt]">
            {props.content}
        </div>
    );
}