import './card.css';
export const Footer = () => {
    return(
        <div className="flex justify-center items-center h-28 md:h-24 bg-white fixed top-0 w-full transition-all duration-1000">
            <div className="flex flex-col md:flex-row justify-between w-[90%]">
                <div className="hidden md:inline">
                    <h1 className="text-xl font-bold inline">pierre.center</h1>
                </div>
                <div className="hidden lg:inline">
                    The index of [things] that I made with code
                </div>
                <div className="flex items-center justify-center">
                    <a className="hover:text-orange-500 mr-6">about me</a>
                    <a className="hover:text-orange-500 mr-6">contact</a>
                    <a className="hover:text-orange-500 mr-6">resume</a>
                    <a className='inline h-8 w-8 bg-cover ghLogo' href="#" target="_blank"></a>
                </div>
            </div>
        </div>
    );
};

