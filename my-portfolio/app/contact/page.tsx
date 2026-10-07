'use client';

import React, { useState } from "react";
import Link from "next/link";

export default function Contact() {
    const [name, setName] = useState<string>('');
    const [number, setNumber] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNumber(event.target.value);
    }

    const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    }

    const handleSubmit = () => {
        setSubmitted(true);
    }

    return (
        <main>
            <h1>Contact Me</h1>

            <p>
                Please enter your information below if you would like
                to contact me.
            </p>

            <section>
                <label>Full Name</label>
                <br />

                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={handleNameChange}
                />

                <br /><br />

                <label>Contact Number</label>
                <br />

                <input
                    type="text"
                    placeholder="Your Contact Number"
                    value={number}
                    onChange={handleNumberChange}
                />

                <br /><br />

                <label>Short Message</label>
                <br />

                <textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={handleMessageChange}
                />

                <br /><br />

                <button onClick={handleSubmit}>
                    Submit
                </button>
            </section>

            {submitted && (
                <section>
                    <h2>Form Submitted!</h2>

                    <p>
                        <strong>Name:</strong> {name}
                    </p>

                    <p>
                        <strong>Contact Number:</strong> {number}
                    </p>

                    <p>
                        <strong>Message:</strong> {message}
                    </p>

                    <Link href="/about">
                        Back to About Me
                    </Link>
                </section>
            )}
        </main>
    );
}