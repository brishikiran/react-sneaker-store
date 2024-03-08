import React from 'react';
import Clips from './utils/Clips';
import SocialLink from './utils/SocialLink';

const Hero = ({ heroapi: { title, subtitle, btntext, img, sociallinks, videos } }) => {
    return (
        <>
            <div className="relative h-auto w-auto flex flex-col">
                <div className="bg-gradient-to-br from-gray-500 to-black-500 clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-10"></div>
                <div className="relative opacity-100 z-20 grid items-center justify-items-center nike-container">
                    <div className="grid items-center justify-items-center mt-28 md:mt-24">
                        <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold text-white animate__animated animate__fadeInDown"> {title} </h1>
                        <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold text-white animate__animated animate__fadeInUp"> {subtitle} </h1>
                        <button type="button" className="button-theme bg-white text-purple-500 shadow-lg rounded-xl my-5 animate__animated animate__bounceInLeft"> {btntext} </button>
                        <div className="grid items-center gap-5 md:gap-3 absolute top-[32vh] lg:top-[27vh] left-[11%] xl:left-0 w-auto h-auto animate__animated animate__bounceIn">
                            {videos?.map((val, i) => (
                                <Clips key={i} imgsrc={val.imgsrc} clip={val.clip} />
                            ))}
                        </div>
                        <div className="grid items-center absolute top-[33vh] lg:top-[27vh] right-0 gap-3 animate__animated animate__bounceInRight">
                            {sociallinks?.map((val, i) => (
                                <SocialLink key={i} icon={val.icon} />
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center transition-transform duration-1000 ease-in-out hover:scale-105">
                        <img src={img} alt="hero-img/img" className="w-auto h-[45vh] lg:h-[35vh] md:h-[31vh] sm:h-[21vh] xsm:h-[19vh] transitions-theme -rotate-[25deg] cursor-pointer object-fill transform hover:rotate-0" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
