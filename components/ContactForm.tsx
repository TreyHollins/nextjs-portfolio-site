import { Field, Form, Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';

const validationSchema = yup.object({
    name: yup.string().trim().min(2, 'Please enter a valid name').max(30, 'Please enter a valid name').required('Please provide your name'),
    email: yup.string().trim().min(5, 'Please enter a valid email').max(50, 'Please enter a valid email').required('Please enter an email'),
    message: yup.string().trim().required('Please enter a message'),
});

function ContactForm(): JSX.Element {
    const form = React.useRef();

    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                message: '',
            }}
            onSubmit={(_, { resetForm }) => {
                emailjs.sendForm('service_qsnpycm', 'template_uuxt0k9', form.current, 'user_xMUmLvtZ5ZmTg0G676BYo').then(
                    (result) => {
                        console.log(result.text);
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );
                resetForm();
            }}
            validationSchema={validationSchema}
        >
            {({ touched, errors, values }) => (
                <Form ref={form} className="rounded-lg p-4 flex flex-col" id="contactForm">
                    <label htmlFor="name" className="text-sm text-gray-600 mx-4">
                        Your Name
                    </label>
                    <Field
                        type="input"
                        name="name"
                        placeholder="Name"
                        value={values.name}
                        className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-sky-500"
                    />
                    {errors.name && touched.name ? <div className="text-red-500">{errors.name}</div> : null}
                    <label htmlFor="email" className="text-sm text-gray-600 mx-4 mt-4">
                        Your Email
                    </label>
                    <Field
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={values.email}
                        className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-sky-500"
                    />
                    {errors.email && touched.email ? <div className="text-red-500">{errors.email}</div> : null}
                    <label htmlFor="message" className="text-sm text-gray-600 mx-4 mt-4">
                        Message
                    </label>
                    <Field
                        as="textarea"
                        rows="4"
                        name="message"
                        placeholder="Message"
                        value={values.message}
                        className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-sky-500"
                    />
                    {errors.message && touched.message ? <div className="text-red-500">{errors.message}</div> : null}
                    <button type="submit" className="bg-sky-500 rounded-md w-1/2 mx-4 mt-8 py-2 text-gray-50 text-xs font-bold">
                        Send
                    </button>
                </Form>
            )}
        </Formik>
    );
}

export default ContactForm;
