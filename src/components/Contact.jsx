import React, { useState } from 'react';
import '../style/Style.css'

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
        if (!event.target.value.trim()) {
            setNameError('Name is required');
        } else {
            setNameError('');
        }
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        const isValidEmail = /\S+@\S+\.\S+/.test(event.target.value);
        if (!isValidEmail) {
            setEmailError('Invalid email address');
        } else {
            setEmailError('');
        }
    };

    const handleBlur = (field) => {
        if (field === 'name' && !name.trim()) {
            setNameError('Name is required');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!name.trim()) {
            setNameError('Name is required');
            return;
        }
        if (!email.trim()) {
            setEmailError('Email is required');
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Invalid email address');
            return;
        }

        console.log('Form submitted:', { name, email, message });

        setName('');
        setEmail('');
        setMessage('');
        setNameError('');
        setEmailError('');
    };

    return (
        <form className='contactForm' onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={handleNameChange}
                    onBlur={() => handleBlur('name')}
                />
                {nameError && <p className="error">{nameError}</p>}
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    onBlur={() => handleBlur('email')}
                />
                {emailError && <p className="error">{emailError}</p>}
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                ></textarea>
            </div>
            <button className='formButton' type="submit">Submit</button>
        </form>
    );
};


export default Contact;