import React from 'react';
import ContactForm from './ContactForm';

function ContactComponent(): JSX.Element {
    return (
        <div>
            <div className="w-full h-auto bg-[#202931] py-8">
                <h1 className="text-gray-200 text-5xl md:text-9xl font-bold text-center">Contact</h1>
            </div>
            <div className="flex items-around justify-center w-full h-screen bg-[#202931]">
                <div className="flex flex-col md:flex-row justify-end bg-gray-200 rounded-md w-full md:w-1/2 h-fit">
                    <div className="w-full md:w-1/2 h-fit p-4">
                        <h5 className="text-3xl text-center text-gray-600 font-semibold">Let&apos;s get in touch!</h5>
                        <p className="text-xl text-center text-gray-500 font-medium">Feel free to reach out and I&apos;ll get back to you.</p>
                        <div className="flex content-center justify-center mt-8">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <p className="text-lg text-center text-gray-500 font-medium ml-4">Orlando, FL</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactComponent;
