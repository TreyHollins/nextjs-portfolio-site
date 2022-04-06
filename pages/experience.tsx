import Head from 'next/head';
import React from 'react';
import ExperienceComponent from '../components/ExperienceComponent';

function Experience(): JSX.Element {
    return (
        <div>
            <Head>
                <title>Trey Hollins - Experience</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <ExperienceComponent />
            </main>
        </div>
    );
}

export default Experience;
