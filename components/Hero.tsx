import React from 'react';

function Hero(): JSX.Element {
    return (
        <div className="flex w-full h-screen justify-center bg-[url('../images/heroimage.jpg')] bg-no-repeat bg-cover bg-fixed bg-center z-0 ">
            <div className="justify-around content-around w-full pt-24">
                <h1 className="text-4xl font font-bold tracking-tight text-[#070723] sm:text-7xl text-center">David Hollins</h1>
                <h1 className="text-4xl font font-bold tracking-tight text-[#070723] sm:text-7xl text-center">Software Developer</h1>
                <br />
                <p className="font-medium text-lg sm:text-xl text-[#070723] text-center">
                   Driven Frontend Software Developer looking for a new position to showcase my skills
                </p>
            </div>
        </div>
    );
}

export default Hero;
