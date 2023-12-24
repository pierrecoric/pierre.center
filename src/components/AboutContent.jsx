import React from "react";

export const AboutContent = () => {
    return(
        <>
            <h1 className="font-helv text-[20pt] mb-12">
                About me
            </h1>
            <p>
                I learned how to code mostly by myself and thanks to some people who showed me where and how to find the ressources to learn. 
                <br/>As a visual artist, I approach programming as a craft, a set of tools and knowledge aimed at building [things]. What I learned through the practice of art and code is that most problems have several solutions and that the role of the person solving it is to find and implement some of them. To find the best path from a point to another, from an idea to a [thing], with due regards to the context and the available ressources.
                <br/>
                <br/>I code in Python, JavaScript, I use React and Tailwind CSS, I love the Processing project and P5.js, I know some PHP which I use when I need to manage databases. And of course HTML5 and CSS3. 
                <br/>
                <br/>You can see my artworks on <a className='underline text-orange-500 hover:text-black' href="https://www.pierre-coric.top" target="_blank">www.pierre-coric.top</a> 
                <br/>
                <br/>Let me know if I can help with making some of the [things] that you might be dreaming about.
            </p>
        </>
    );
}