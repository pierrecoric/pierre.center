export const Footer = () => {
    return(
        <div className="flex justify-center items-center h-24 bg-white fixed bottom-0 w-full">
            <div className="flex justify-between w-[90%]">
                <div className="">
                    <h1 className="text-xl font-bold inline">pierre.center</h1>
                    <p className="inline ml-[60px]">Index of [things] that I made with code</p>
                </div>
                <div className="">
                    <a className="">about me</a>
                    <a className="ml-[60px]">contact</a>
                </div>
            </div>
        </div>
    );
};

