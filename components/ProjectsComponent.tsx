import React from 'react';

const projects = [
    {
        title: 'Apollo GraphQL Practice Lab',
        link: 'https://hollins-catstronauts-client.herokuapp.com/',
        imgUrl: '/catstronauts.jpg',
    },
    {
        title: 'Personal Website with React',
        link: 'https://loving-goldstine-27a90d.netlify.app/',
        imgUrl: '/personalsite.jpg',
    },
    {
        title: 'Discord Bot with NodeJS',
        link: 'https://github.com/TreyHollins/discord-bot',
        imgUrl: '/chopper.png',
    },
    {
        title: 'Home Grown - Coming Soon!',
        link: '',
        imgUrl: '/homegrown.png',
    },
];

function ProjectsComponent(): JSX.Element {
    return (
        <section>
            <div className="max-w-full mx-auto h-48 bg-sky-500">
                <h1 className="text-5xl md:text-9xl font-bold py-20 text-center text-gray-200">Projects</h1>
            </div>
            <div className="bg-[#202931]">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
                    {projects.map((proj, idx) => (
                        <ProjectCard title={proj.title} link={proj.link} imgUrl={proj.imgUrl} number={`${idx + 1}`} />
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
                    <img
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
