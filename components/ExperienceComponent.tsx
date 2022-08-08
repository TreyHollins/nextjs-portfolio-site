import React from 'react';

const experiences = [
    {
        title: 'Junior Software Developer',
        company: 'Mach One Digital',
        year: '2022',
        description: "Helping to create a project launching soon. I\'ve gotten experience using React, React Native, Typescript, and Apollo GraphQL",
        companyLink: 'https://www.machonedigital.com/',
    },
    {
        title: 'University of Cincinnati',
        company: 'University of Cincinnati',
        year: '2021',
        description: "Associate\'s of Applied Business with a focus in Software Application Development.",
        companyLink: 'https://ucclermont.edu/',
    },
    {
        title: 'Fulfillment Expert',
        company: 'Target',
        year: '2021',
        description: 'Trained new team members while retrieving items for online orders, packed items, and loaded packages.',
        companyLink: 'https://www.target.com/',
    },
    {
        title: 'High School',
        company: 'Williamsburg High School',
        year: '2020',
        description:
            'College Credit Plus Student at UC Clermont College with 58 credit hours including 30+ IT credit hours over 4 semesters, 3.9 GPA',
        companyLink: 'https://www.burgschools.org/',
    },
    {
        title: 'Crew Trainer',
        company: "McDonald's",
        year: '2017',
        description: 'Trained new crew members while completing orders for guests under time constraints.',
        companyLink: '',
    },
];

function ExperienceComponent(): JSX.Element {
    return (
        <div>
            <div className="max-w-full mx-auto h-48 bg-[#295275]">
                <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center text-gray-200">Experience</h1>
            </div>
            <div className="bg-[#202931] -mt-4">
                <div className="grid grid-cols-1 max-w-xl mx-auto pt-20">
                    {experiences.map((exp, idx) => (
                        <>
                            <ExperienceCard
                                key={idx}
                                title={exp.title}
                                desc={exp.description}
                                year={exp.year}
                                company={exp.company}
                                companyLink={exp.companyLink}
                            />
                            {idx === experiences.length - 1 ? null : (
                                <div className="divider-container flex flex-col items-center -mt-2">
                                    <div className="w-4 h-4 bg-sky-500 rounded-full relative z-10">
                                        <div className="w-4 h-4 bg-sky-500 rounded-full relative z-10 animate-ping"></div>
                                    </div>
                                    <div className="w-1 h-24 bg-gray-600 rounded-full -mt-2"></div>
                                </div>
                            )}
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ExperienceComponent;

function ExperienceCard({ title, desc, year, company, companyLink }): JSX.Element {
    return (
        <div className="relative experience-card border p-4 rounded-md shadow-xl bg-gray-800 z-10 mx-4">
            <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-400 font-bold">{year}</h1>
            <h1 className="font-semibold text-xl text-gray-300">{title}</h1>
            <a href={companyLink} className="text-gray-400">
                {company}
            </a>
            <p className="text-gray-400 my-2">{desc}</p>
        </div>
    );
}
