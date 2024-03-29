import Image from 'next/image';
import React from 'react';
import puregolden from '../images/puregolden.png'
import personalsite from '../images/personalsite.jpg'
import chopper from '../images/chopper.png'
import homegrown from '../images/homegrown.png'

const projects = [
     {
        title: 'Home Grown',
        link: 'https://findhomegrown.com',
        imgUrl: homegrown,
    },
    {
        title: 'Pure Golden - Natural Products',
        link: 'https://puregolden.co',
        imgUrl: puregolden
    },
    {
        title: 'Personal Website with React',
        link: 'https://loving-goldstine-27a90d.netlify.app/',
        imgUrl: personalsite,
    },
    {
        title: 'Discord Bot with NodeJS',
        link: 'https://github.com/TreyHollins/discord-bot',
        imgUrl: chopper,
    },
   
];

function ProjectsComponent(): JSX.Element {
    return (
        <section>
            <div className="max-w-full mx-auto h-48 bg-[#295275]">
                <h1 className="text-5xl md:text-9xl font-bold py-20 text-center text-gray-200">Projects</h1>
            </div>
            <div className="bg-[#202931]">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
                    {projects.map((proj, idx) => (
                        <ProjectCard key={idx} title={proj.title} link={proj.link} imgUrl={proj.imgUrl} number={`${idx + 1}`} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectsComponent;

function ProjectCard({ title, link, imgUrl, number }): JSX.Element {
    return (
        <a href={link} className="w-full block shadow-2xl">
            <div className="relative overflow-hidden">
                <div className="h-72 object-cover">
                    <Image
                        src={imgUrl}
                        alt="portfolio"
                        className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
                    />
                </div>
                <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-sky-500 rounded-md px-2">{title}</h1>
                <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">{number.length === 1 ? '0' + number : number}</h1>
            </div>
        </a>
    );
};
