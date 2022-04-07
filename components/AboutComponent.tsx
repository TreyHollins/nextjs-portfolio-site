import React from 'react';

const about = {
    title: "I'm a Junior Software Developer who recently graduated from the University of Cincinnati. I'm looking for a Junior Developer Job",
    currentProject: 'Home Grown (Coming Soon)',
    currentProjectUrl: '',
    email: 'trey.hollins@gmail.com',
    resumeUrl: '/resume.pdf',
    description: [
        "I've been interested in software development since I was a kid. I would work on Codecademy courses in school and my interest grew each time I completed a lesson. Since then, I have continued to learn about programming whether it be from Codecademy, Pluralsight, my school work, or personal projects like this website.",
        "My latest project has been challenging but I've been able to push myself and learn more than I ever have before. It is called Home Grown. Once it launches,you will be able to find local farms and farmers' markets near your location. It's exciting to think about the possibilites of what it will become.",
        "Besides programming, some of my hobbies include video games, going to the gym, and working on my car. I have a 2005 Nissan 350z. I love driving it and working on it has been a real learning experience.",
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
                                I'm looking for a job currently, If you see me as a good fit, check my{' '}
                                <a
                                    href={about.resumeUrl}
                                    target="__blank"
                                    className="text-gray-50 bg-sky-500 px-1 py-1 rounded-md font-bold"
                                >
                                    Resume
                                </a>{' '}
                                and I'd love to get in contact.
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
                            <img
                                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                                className="h-20 w-20 mx-4 my-4"
                            />
                            <img
                                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"
                                className="h-20 w-20 mx-4 my-4"
                            />
                            <img
                                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
                                className="h-20 w-20 mx-4 my-4"
                            />
                            <img
                                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
                                className="h-20 w-20 mx-4 my-4"
                            />
                            <img
                                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                                className="h-20 w-20 mx-4 my-4"
                            />
                            <img
                                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/java/java.png"
                                className="h-20 w-20 mx-4 my-4"
                            />
                            <img
                                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
                                className="h-20 w-20 mx-4 my-4"
                            />
                            <img
                                src="https://raw.githubusercontent.com/github/explore/e65ef46ef3e7bc457c93622f6a89fe8d3fd131d5/topics/graphql/graphql.png"
                                className="h-20 w-20 mx-4 my-4"
                            />
                            <img
                                src="https://logowik.com/content/uploads/images/microsoft-sql-server4529.jpg"
                                className="h-20 w-20 mx-4 my-4"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutComponent;
