import Image from 'next/image';
import React from 'react';
import javascript from '../images/javascript.png';
import typescript from '../images/typescript.png';
import html from '../images/html.png';
import css from '../images/css.png';
import react from '../images/react.png';
import java from '../images/java.png';
import nodejs from '../images/nodejs.png';
import graphql from '../images/graphql.png';
import sqlserver from '../images/sqlserver.jpg';

const about = {
    title: "I\'m a Junior Software Developer who recently graduated from the University of Cincinnati. I\'m looking for a Junior Developer Job",
    currentProject: 'Home Grown (Coming Soon)',
    currentProjectUrl: '',
    email: 'trey.hollins@gmail.com',
    resumeUrl: '/David-Hollins-III-Resume.pdf',
    description: [
        "I\'ve been interested in software development since I was a kid. I would work on Codecademy courses in school and my interest grew each time I completed a lesson. Since then, I have continued to learn about programming whether it be from Codecademy, Pluralsight, my school work, or personal projects like this website.",
        "My latest project has been challenging but I have been able to push myself and learn more than I ever have before. It is called Home Grown. Once it launches,you will be able to find local farms and farmers\' markets near your location. It\'s exciting to think about the possibilites of what it will become.",
        'Besides programming, some of my hobbies include video games, going to the gym, and working on my car. I have a 2005 Nissan 350z. I love driving and working on it has been a real learning experience.',
    ],
};

function AboutComponent(): JSX.Element {
    return (
        <div>
            <div className="max-w-full mx-auto h-48 bg-[#295275]">
                <h1 className="text-gray-200 text-5xl md:text-9xl font-bold py-20 text-center">About Me</h1>
            </div>
            <div className="bg-[#202931] -mt-10">
                <div className="text-container max-w-6xl mx-auto pt-20">
                    <p className="leading-loose text-2xl md:text-4xl font-semibold text-gray-200 mx-4" style={{ lineHeight: '3rem' }}>
                        {about.title}. Currently working on {about.currentProject}.
                    </p>
                </div>
            </div>
            <div className="bg-[#202931] px-4">
                <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
                    {/* Social Buttons */}
                    <div className="inline-flex flex-col">
                        <div className="mt-8">
                            <h1 className="text-xl font-semibold text-gray-200">Job Opportunities</h1>
                            <p className="text-lg text-gray-400 mt-4">
                                I&apos;m looking for a job currently, If you see me as a good fit, check my{' '}
                                <a href={about.resumeUrl} target="__blank" className="text-gray-50 bg-sky-500 px-1 py-1 rounded-md font-bold">
                                    Resume
                                </a>{' '}
                                and I&apos;d love to get in contact.
                            </p>
                        </div>
                    </div>
                    {/* Text area */}
                    <div className="col-span-1 md:col-span-2">
                        {about.description?.map((desc, idx) => (
                            <p key={idx} className="text-xl text-gray-400 mb-4">
                                {desc}
                            </p>
                        ))}

                        <h1 className="bg-sky-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">Tech Stack</h1>
                        <div className="flex flex-row flex-wrap mt-8">
                            <div className="m-4">
                                <Image src={javascript} alt="Javascript" width="80px" height="80px" />
                            </div>
                            <div className="m-4">
                                <Image src={typescript} alt="Typescript" width="80px" height="80px" />
                            </div>
                            <div className="m-4">
                                <Image src={html} alt="HTML" width="80px" height="80px" />
                            </div>
                            <div className="m-4">
                                <Image src={css} alt="CSS" width="80px" height="80px" />
                            </div>
                            <div className="m-4">
                                <Image src={react} alt="React" width="80px" height="80px" />
                            </div>
                            <div className="m-4">
                                <Image src={java} alt="Java" width="80px" height="80px" />
                            </div>
                            <div className="m-4">
                                <Image src={nodejs} alt="NodeJS" width="80px" height="80px" />
                            </div>
                            <div className="m-4">
                                <Image src={graphql} alt="GraphQL" width="80px" height="80px" />
                            </div>
                            <div className="m-4">
                                <Image src={sqlserver} alt="SQL Server" width="80px" height="80px" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutComponent;
