import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate a form submission (you can replace this with an actual API call)
        console.log({ name, email, message });
        setIsSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8 bg-gray-300 mt-8">
            <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
            {isSubmitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
                    <strong className="font-bold">Thank you!</strong>
                    <span className="block sm:inline"> Your message has been sent.</span>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-semibold mb-1">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full border border-gray-400 rounded p-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full border border-gray-400 rounded p-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Your Email"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-semibold mb-1">Message</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            className="w-full border border-gray-400 rounded p-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Your Message"
                            rows="4"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded"
                    >
                        Send Message
                    </button>
                </form>
            )}
        </div>
    );
};

export default Contact;
