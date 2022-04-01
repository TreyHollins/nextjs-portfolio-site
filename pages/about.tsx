import Head from 'next/head';
import React from 'react';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

function About(): JSX.Element {
    return (
        <div className={styles.container}>
            <Head>
                <title>Trey Hollins - About</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <div className="w-full h-screen">
                    
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default About;
